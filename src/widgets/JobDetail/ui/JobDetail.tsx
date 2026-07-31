import { UrlList } from "@/widgets/UrlList";

import { formatDateOnly } from "@/shared/lib/date";

import { JOB_STATUS_TR, type IJobAlone } from "@/entities/job";

import styles from "./index.module.css";

interface IProps {
	job: IJobAlone;
}

export default function JobDetail({ job }: IProps) {
	return (
		<div>
			<ul>
				<li>
					<p>Статус:</p>
					<span>{JOB_STATUS_TR[job.status]}</span>
				</li>
				<li>
					<p>Количество ссылок:</p>
					<span>{job.urlCount}</span>
				</li>
				<li>
					<p>Успешных:</p>
					<span>{job.successCount}</span>
				</li>
				<li>
					<p>С ошибкой:</p>
					<span>{job.errorCount}</span>
				</li>
				<li>
					<p>Дата создания:</p>
					<span>{formatDateOnly(job.createdAt)}</span>
				</li>
			</ul>

			<UrlList urls={job.urls} />
		</div>
	);
}
