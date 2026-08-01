import type { IJob, IJobAlone, IJobCreated } from "@/entities/job/model/types";

import { apiInstance, type IResponse } from "@/shared/api";

export class JobApi {
	static async getAll(): Promise<IResponse<IJob[]>> {
		const response = await apiInstance.get<IResponse<IJob[]>>("jobs");

		return response.data;
	}

	static async getJob(jobId: string): Promise<IResponse<IJobAlone>> {
		const response = await apiInstance.get<IResponse<IJobAlone>>(
			`jobs/${jobId}`,
		);

		return response.data;
	}

	static async createJob(urls: string[]): Promise<IResponse<IJobCreated>> {
		const response = await apiInstance.post("jobs", { urls });

		return response.data;
	}

	static async deleteJob(jobId: string): Promise<IResponse<boolean>> {
		const response = await apiInstance.delete(`jobs/${jobId}`);

		return response.data;
	}
}
