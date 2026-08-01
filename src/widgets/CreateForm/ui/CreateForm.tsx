import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useJobStore } from "@/entities/job";

import { Button } from "@/shared/Button";
import { Textarea } from "@/shared/Textarea";

import styles from "./index.module.css";

export default function CreateForm() {
	const navigate = useNavigate();
	const { createJob, isLoading } = useJobStore();
	const [textareaValue, setTextareaValue] = useState<string>("");

	async function onCreate() {
		const urls = textareaValue
			.split("\n")
			.map((url) => url.trim())
			.filter((url) => url);

		const job = await createJob(urls);

		if (job) {
			navigate(`/jobs/${job.jobId}`);
		}
	}

	return (
		<form className={styles.form}>
			<Textarea
				onChange={(e) => setTextareaValue(e.target.value)}
				rows={5}
				placeholder="Введите ссылки"
			></Textarea>

			<div className={styles.form__footer}>
				<Button type="button" disabled={isLoading} onClick={onCreate}>
					Создать
				</Button>
			</div>
		</form>
	);
}
