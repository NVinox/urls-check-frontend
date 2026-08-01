import { createPortal } from "react-dom";

import { useErrorModalStore } from "@/shared/ErrorModal";

import { Title } from "@/shared/Title";
import { Button } from "@/shared/Button";

import styles from "./index.module.css";

export default function ErrorModal() {
	const { isError, closeError } = useErrorModalStore();

	if (!isError) return null;

	return createPortal(
		<div className={styles.overlay} onClick={closeError}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<Title variant="h3">
					<span className={styles.title}>Ошибка</span>
				</Title>

				<p className={styles.message}>
					Произошла ошибка. Попробуйте перезагрузить страницу.
				</p>

				<div className={styles.footer}>
					<Button variant="primary" onClick={closeError}>
						Понятно
					</Button>
				</div>
			</div>
		</div>,
		document.body,
	);
}
