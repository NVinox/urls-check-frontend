import { Link } from "react-router-dom";

import { Title } from "@/shared/Title";

import styles from "./index.module.css";

export default function JobList() {
	return (
		<ul className={styles.jobs}>
			<li>
				<article className={styles.jobs__card}>
					<header className={styles.jobs__header}>
						<Title className={styles.jobs__title} variant="h2">
							<Link className={styles.jobs__link} to="/">
								Название
							</Link>
						</Title>
						<span className={styles.jobs__status}>Статус</span>
					</header>

					<footer className={styles.jobs__footer}>
						<ul className={styles.jobs__details}>
							<li className={styles.jobs__detail}>
								<p className={styles.jobs__detail_title}>Количество ссылок:</p>
								<span className={styles.jobs__detail_value}>3</span>
							</li>
							<li className={styles.jobs__detail}>
								<p className={styles.jobs__detail_title}>Успешных:</p>
								<span className={styles.jobs__detail_value}>1</span>
							</li>
							<li className={styles.jobs__detail}>
								<p className={styles.jobs__detail_title}>С ошибкой:</p>
								<span className={styles.jobs__detail_value}>2</span>
							</li>
						</ul>

						<p className={styles.jobs__date}>31.07.2026</p>
					</footer>
				</article>
			</li>
		</ul>
	);
}
