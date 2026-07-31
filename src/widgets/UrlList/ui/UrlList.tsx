import clsx from "clsx";

import {
	URL_STATUS,
	URL_STATUS_TR,
	type IUrl,
} from "@/entities/job/model/types";

import { Title } from "@/shared/Title";
import { formatDateWithTime, formatSeconds } from "@/shared/lib/date";

import styles from "./index.module.css";

interface IProps {
	urls: IUrl[];
}

export default function UrlList({ urls }: IProps) {
	return (
		<ul>
			{urls.map((url) => (
				<li key={url.id}>
					<article>
						<header>
							<Title variant="h2">{url.url}</Title>

							<span
								className={clsx(styles.jobs__status, {
									[styles.pending]: url.status === URL_STATUS.PENDING,
									[styles.progress]: url.status === URL_STATUS.IN_PROGRESS,
									[styles.success]: url.status === URL_STATUS.SUCCESS,
									[styles.canceled]: url.status === URL_STATUS.CANCELLED,
									[styles.error]: url.status === URL_STATUS.ERROR,
								})}
							>
								{URL_STATUS_TR[url.status]}
							</span>
						</header>

						<footer>
							<ul>
								{url.statusCode && (
									<li>
										<p>Статус код:</p>
										<span>{url.statusCode}</span>
									</li>
								)}
								{url.errorMessage && (
									<li>
										<p>Сообщение об ошибке:</p>
										<span>{url.errorMessage}</span>
									</li>
								)}
								{url.startedAt && (
									<li>
										<p>Начало запроса:</p>
										<span>{formatDateWithTime(url.startedAt)}</span>
									</li>
								)}
								{url.finishedAt && (
									<li>
										<p>Конец запроса:</p>
										<span>{formatDateWithTime(url.finishedAt)}</span>
									</li>
								)}
								{url.duration && (
									<li>
										<p>Время отклика:</p>
										<span>{formatSeconds(url.duration)}</span>
									</li>
								)}
							</ul>
						</footer>
					</article>
				</li>
			))}
		</ul>
	);
}
