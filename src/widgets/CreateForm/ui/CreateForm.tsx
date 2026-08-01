import { Button } from "@/shared/Button";
import { Textarea } from "@/shared/Textarea";

import styles from "./index.module.css";

export default function CreateForm() {
	return (
		<form>
			<Textarea></Textarea>

			<div>
				<Button>Создать</Button>
				<Button>Отменить</Button>
			</div>
		</form>
	);
}
