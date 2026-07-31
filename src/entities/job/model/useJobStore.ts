import { JobApi, type IJob } from "@/entities/job";
import { create } from "zustand";

interface IJobState {
	jobs: IJob[];
	isLoading: boolean;
	setJobs: (jobs: IJob[]) => void;
	fetchJobs: () => Promise<void>;
}

export const useJobStore = create<IJobState>((set) => ({
	jobs: [],
	isLoading: false,

	setJobs(jobs): void {
		set({ jobs });
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
}));
