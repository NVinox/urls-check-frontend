import { Button } from "@/shared/Button";
import { Textarea } from "@/shared/Textarea";

import styles from "./index.module.css";

export default function CreateForm() {
	return (
		<form className={styles.form}>
			<Textarea rows={5} placeholder="Введите ссылки"></Textarea>

			<div className={styles.form__footer}>
				<Button>Создать</Button>
				<Button variant="secondary">Отменить</Button>
			</div>
		</form>
	);
}
