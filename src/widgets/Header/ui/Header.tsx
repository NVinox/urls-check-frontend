import { Link } from "react-router-dom";

import { ContainerLayout } from "@/shared/ContainerLayout";
import { CREATE_JOB_ROUTE, HOME_ROUTE } from "@/shared/constants";

import styles from "./index.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<ContainerLayout>
				<nav className={styles.header__nav}>
					<Link className={styles.header__link} to={HOME_ROUTE}>
						Главная
					</Link>
					<Link className={styles.header__link} to={CREATE_JOB_ROUTE}>
						Создать
					</Link>
				</nav>
			</ContainerLayout>
		</header>
	);
}
