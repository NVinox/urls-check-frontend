import {
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
	fetchJob: (jobId: string) => Promise<void>;
	fetchJobs: () => Promise<void>;
	createJob: (urls: string[]) => Promise<IJobCreated | undefined>;
}

export const useJobStore = create<IJobState>((set) => ({
	job: null,
	jobs: [],
	isLoading: false,

	async fetchJob(jobId: string): Promise<void> {
		set({ isLoading: true });

		try {
			const response = await JobApi.getJob(jobId);

			if (response.data) {
				set({ job: response.data });
			}
		} catch (err: unknown) {
		} finally {
			set({ isLoading: false });
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
}));
