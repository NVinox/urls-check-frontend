import type { IJob } from "@/entities/job/model/types";

import { apiInstance, type IResponse } from "@/shared/api";

export class JobApi {
	static async getAll(): Promise<IResponse<IJob[]>> {
		const response = await apiInstance.get<IResponse<IJob[]>>("jobs");

		return response.data;
	}
}
