import { JOB_STATUS_TR, type IJob } from "@/entities/job";

import { formatDateOnly } from "@/shared/lib/date";
import { StatusBadge } from "@/shared/StatusBadge";

import styles from "./index.module.css";

interface IProps {
	job: IJob;
}

export default function JobDetail({ job }: IProps) {
	return (
		<ul className={styles.job}>
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
	);
}
