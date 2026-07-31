import type { IJob } from "@/entities/job";
import { create } from "zustand";

interface IJobState {
	jobs: IJob[];
	isLoading: boolean;
	setJobs: (jobs: IJob[]) => void;
}

export const useJobStore = create<IJobState>((set) => ({
	jobs: [],
	isLoading: false,

	setJobs(jobs) {
		set({ jobs });
	},
}));
