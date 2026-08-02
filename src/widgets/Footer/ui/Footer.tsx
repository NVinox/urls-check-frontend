import { ContainerLayout } from "@/shared/ContainerLayout";

import styles from "./index.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<ContainerLayout>
				<p className={styles.footer__creator}>&copy; Sergey Klimov</p>
			</ContainerLayout>
		</footer>
	);
}
