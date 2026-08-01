import {
	JOB_STATUS,
	JOB_STATUS_TR,
	useJobStore,
	type IJob,
} from "@/entities/job";

import { Button } from "@/shared/Button";
import { StatusBadge } from "@/shared/StatusBadge";
import { formatDateOnly } from "@/shared/lib/date";

import styles from "./index.module.css";
import { useParams } from "react-router-dom";

interface IProps {
	job: IJob;
}

export default function JobDetail({ job }: IProps) {
	const canStop =
		job.status === JOB_STATUS.PENDING || job.status === JOB_STATUS.IN_PROGRESS;
	const { deleteJob, fetchJob } = useJobStore();
	const { jobId } = useParams<{ jobId: string }>();

	async function onDeleteJob() {
		if (jobId) {
			await deleteJob(jobId);
			await fetchJob(job.jobId);
		}
	}

	return (
		<div className={styles.job}>
			<ul className={styles.job__wrapper}>
				<li className={styles.job__item}>
					<p className={styles.job__title}>Статус:</p>
					<StatusBadge status={job.status} text={JOB_STATUS_TR[job.status]} />
				</li>
				<li className={styles.job__item}>
					<p className={styles.job__title}>Количество ссылок:</p>
					<span className={styles.job__value}>{job.urlCount}</span>
				</li>
				<li className={styles.job__item}>
					<p className={styles.job__title}>Успешных:</p>
					<span className={styles.job__value}>{job.successCount}</span>
				</li>
				<li className={styles.job__item}>
					<p className={styles.job__title}>С ошибкой:</p>
					<span className={styles.job__value}>{job.errorCount}</span>
				</li>
				<li className={styles.job__item}>
					<p className={styles.job__title}>Дата создания:</p>
					<span className={styles.job__value}>
						{formatDateOnly(job.createdAt)}
					</span>
				</li>
			</ul>

			{canStop && (
				<Button variant="secondary" onClick={onDeleteJob}>
					Остановить
				</Button>
			)}
		</div>
	);
}
