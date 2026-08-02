import { Link } from "react-router-dom";

import { JOB_STATUS_TR, type IJob } from "@/entities/job";

import { Title } from "@/shared/Title";
import { formatDateOnly } from "@/shared/lib/date";
import { StatusBadge } from "@/shared/StatusBadge";

import styles from "./index.module.css";

interface IProps {
	isLoading: boolean;
	jobs: IJob[];
}

export default function JobList({ isLoading, jobs }: IProps) {
	return isLoading ? (
		<p>Загрузка ...</p>
	) : jobs.length ? (
		<ul className={styles.jobs}>
			{jobs.map((job) => (
				<li key={job.id}>
					<article className={styles.jobs__card}>
						<header className={styles.jobs__header}>
							<Title className={styles.jobs__title} variant="h2">
								<Link className={styles.jobs__link} to={`/jobs/${job.jobId}`}>
									{job.jobId}
								</Link>
							</Title>

							<StatusBadge
								status={job.status}
								text={JOB_STATUS_TR[job.status]}
							/>
						</header>

						<footer className={styles.jobs__footer}>
							<ul className={styles.jobs__details}>
								<li className={styles.jobs__detail}>
									<p className={styles.jobs__detail_title}>
										Количество ссылок:
									</p>
									<span className={styles.jobs__detail_value}>
										{job.urlCount}
									</span>
								</li>
								<li className={styles.jobs__detail}>
									<p className={styles.jobs__detail_title}>Успешных:</p>
									<span className={styles.jobs__detail_value}>
										{job.successCount}
									</span>
								</li>
								<li className={styles.jobs__detail}>
									<p className={styles.jobs__detail_title}>С ошибкой:</p>
									<span className={styles.jobs__detail_value}>
										{job.errorCount}
									</span>
								</li>
							</ul>

							<p className={styles.jobs__date}>
								{formatDateOnly(job.createdAt)}
							</p>
						</footer>
					</article>
				</li>
			))}
		</ul>
	) : (
		<p>Нет данных</p>
	);
}
