import {
	JOB_STATUS,
	JobApi,
	type IJob,
	type IJobAlone,
	type IJobCreated,
} from "@/entities/job";
import { create } from "zustand";

interface IJobState {
	job: IJobAlone | null;
	jobs: IJob[];
	isLoading: boolean;
	isPolling: boolean;
	stopPolling: () => void;
	fetchJob: (jobId: string, isBackground?: boolean) => Promise<void>;
	startPolling: (jobId: string) => Promise<void>;
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

	async startPolling(jobId: string): Promise<void> {
		if (get().isPolling) return;

		set({ isPolling: true });

		await get().fetchJob(jobId, false);

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
		} finally {
			set({ isLoading: false });
		}
	},

	async deleteJob(jobId: string): Promise<void> {
		set({ isLoading: true });

		try {
			await JobApi.deleteJob(jobId);
		} catch (err: unknown) {
		} finally {
			set({ isLoading: false });
			set({ isPolling: false });
		}
	},
}));
