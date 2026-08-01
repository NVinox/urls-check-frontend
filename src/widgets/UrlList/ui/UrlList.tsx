import { URL_STATUS_TR, type IUrl } from "@/entities/job/model/types";

import { Title } from "@/shared/Title";
import { StatusBadge } from "@/shared/StatusBadge";
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

							<StatusBadge
								status={url.status}
								text={URL_STATUS_TR[url.status]}
							/>
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
