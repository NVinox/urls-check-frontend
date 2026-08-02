import {
	JOB_STATUS,
	JobApi,
	type IJob,
	type IJobAlone,
	type IJobCreated,
} from "@/entities/job";
import { create } from "zustand";

import { useErrorModalStore } from "@/shared/ErrorModal";

interface IJobState {
	job: IJobAlone | null;
	jobs: IJob[];
	isLoading: boolean;
	isPolling: boolean;
	stopPolling: () => void;
	fetchJob: (jobId: string, isBackground?: boolean) => Promise<void>;
	startPolling: (jobId: string) => Promise<boolean>;
	fetchJobs: () => Promise<void>;
	createJob: (urls: string[]) => Promise<IJobCreated | undefined>;
	deleteJob: (jobId: string) => Promise<void>;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useJobStore = create<IJobState>((set, get) => ({
	job: null,
	jobs: [],
	isLoading: false,
	isPolling: false,

	stopPolling() {
		set({ isPolling: false });
	},

	async startPolling(jobId: string): Promise<boolean> {
		if (get().isPolling) {
			return true;
		}

		set({ isPolling: true });

		await get().fetchJob(jobId, false);

		if (!get().job) {
			set({ isPolling: false });
			return false;
		}

		while (get().isPolling) {
			const currentJob = get().job;

			if (
				currentJob &&
				(currentJob.status === JOB_STATUS.COMPLETED ||
					currentJob.status === JOB_STATUS.FAILED ||
					currentJob.status === JOB_STATUS.CANCELED)
			) {
				set({ isPolling: false });
				break;
			}

			await delay(2000);

			if (get().isPolling) {
				await get().fetchJob(jobId, true);
			}
		}

		return true;
	},

	async fetchJob(jobId: string, isBackground = false): Promise<void> {
		if (!isBackground) {
			set({ isLoading: true });
		}

		try {
			const response = await JobApi.getJob(jobId);

			if (response.data) {
				set({ job: response.data });
			}
		} catch (err: unknown) {
			useErrorModalStore.getState().showError();
		} finally {
			if (!isBackground) {
				set({ isLoading: false });
			}
		}
	},

	async fetchJobs(): Promise<void> {
		set({ isLoading: true });

		try {
			const response = await JobApi.getAll();

			if (response.data) {
				set({ jobs: response.data });
			}
		} catch (err: unknown) {
			useErrorModalStore.getState().showError();
		} finally {
			set({ isLoading: false });
		}
	},

	async createJob(urls: string[]): Promise<IJobCreated | undefined> {
		set({ isLoading: true });

		try {
			const response = await JobApi.createJob(urls);

			if (response.data) {
				return response.data;
			}
		} catch (err: unknown) {
			useErrorModalStore.getState().showError();
		} finally {
			set({ isLoading: false });
		}
	},

	async deleteJob(jobId: string): Promise<void> {
		set({ isLoading: true });

		try {
			await JobApi.deleteJob(jobId);
		} catch (err: unknown) {
			useErrorModalStore.getState().showError();
		} finally {
			set({ isLoading: false });
			set({ isPolling: false });
		}
	},
}));
