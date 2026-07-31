import { NavLink } from "react-router-dom";

import { ContainerLayout } from "@/shared/ContainerLayout";
import { CREATE_JOB_ROUTE, HOME_ROUTE } from "@/shared/constants";

import styles from "./index.module.css";

interface INavLink {
	isActive: boolean;
}

export default function Header() {
	function getLinkClass({ isActive }: INavLink): string {
		return isActive
			? `${styles.header__link} ${styles.active}`
			: styles.header__link;
	}

	return (
		<header className={styles.header}>
			<ContainerLayout>
				<nav className={styles.header__nav}>
					<NavLink className={getLinkClass} to={HOME_ROUTE}>
						Главная
					</NavLink>
					<NavLink className={getLinkClass} to={CREATE_JOB_ROUTE}>
						Создать
					</NavLink>
				</nav>
			</ContainerLayout>
		</header>
	);
}
