export interface IResponse<T> {
	statusCode: number;
	status: "OK" | "ERROR";
	data: T | null;
	error?: {
		message: string[];
		error: string;
		statusCode: number;
	};
}
