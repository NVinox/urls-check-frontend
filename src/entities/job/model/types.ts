const JOB_STATUS = {
	PENDING: "pending",
	IN_PROGRESS: "in_progress",
	COMPLETED: "completed",
	CANCELED: "cancelled",
	FAILED: "failed",
} as const;

export const JOB_STATUS_TR: Record<TJobStatus, string> = {
	pending: "В ожидании",
	in_progress: "Выполняется",
	completed: "Завершено",
	cancelled: "Отменено",
	failed: "Ошибка",
} as const;

export type TJobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export interface IJob {
	id: number;
	jobId: string;
	status: TJobStatus;
	urlCount: number;
	successCount: number;
	errorCount: number;
	createdAt: Date;
}
