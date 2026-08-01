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
		<ul className={styles.url}>
			{urls.map((url) => (
				<li key={url.id}>
					<article className={styles.url__article}>
						<header className={styles.url__header}>
							<Title variant="h2">
								<span className={styles.url__title}>{url.url}</span>
							</Title>

							<span
								className={clsx(styles.url__status, {
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
							<ul className={styles.url__details}>
								{url.statusCode && (
									<li className={styles.url__detail}>
										<p className={styles.url__detail_title}>Статус код:</p>
										<span className={styles.url__detail_value}>
											{url.statusCode}
										</span>
									</li>
								)}
								{url.errorMessage && (
									<li className={styles.url__detail}>
										<p className={styles.url__detail_title}>
											Сообщение об ошибке:
										</p>
										<span className={styles.url__detail_value}>
											{url.errorMessage}
										</span>
									</li>
								)}
								{url.startedAt && (
									<li className={styles.url__detail}>
										<p className={styles.url__detail_title}>Начало запроса:</p>
										<span className={styles.url__detail_value}>
											{formatDateWithTime(url.startedAt)}
										</span>
									</li>
								)}
								{url.finishedAt && (
									<li className={styles.url__detail}>
										<p className={styles.url__detail_title}>Конец запроса:</p>
										<span className={styles.url__detail_value}>
											{formatDateWithTime(url.finishedAt)}
										</span>
									</li>
								)}
								{url.duration && (
									<li className={styles.url__detail}>
										<p className={styles.url__detail_title}>Время отклика:</p>
										<span className={styles.url__detail_value}>
											{formatSeconds(url.duration)}
										</span>
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
