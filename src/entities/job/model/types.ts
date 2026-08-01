export const JOB_STATUS = {
	PENDING: "pending",
	IN_PROGRESS: "in_progress",
	COMPLETED: "completed",
	CANCELED: "cancelled",
	FAILED: "failed",
} as const;

export const URL_STATUS = {
	PENDING: "pending",
	IN_PROGRESS: "in_progress",
	SUCCESS: "success",
	ERROR: "error",
	CANCELLED: "cancelled",
} as const;

export const JOB_STATUS_TR: Record<TJobStatus, string> = {
	pending: "В ожидании",
	in_progress: "Выполняется",
	completed: "Завершено",
	cancelled: "Отменено",
	failed: "Ошибка",
} as const;

export const URL_STATUS_TR: Record<TUrlStatus, string> = {
	pending: "В ожидании",
	in_progress: "Выполняется",
	success: "Успешно",
	error: "Ошибка",
	cancelled: "Отменено",
} as const;

export type TJobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];
export type TUrlStatus = (typeof URL_STATUS)[keyof typeof URL_STATUS];

export interface IUrl {
	id: number;
	url: string;
	status: TUrlStatus;
	statusCode: number | null;
	errorMessage: string | null;
	startedAt: string | null;
	finishedAt: string | null;
	duration: number | null;
}

export interface IJob {
	id: number;
	jobId: string;
	status: TJobStatus;
	urlCount: number;
	successCount: number;
	errorCount: number;
	createdAt: string;
}

export interface IJobAlone extends IJob {
	urls: IUrl[];
}
