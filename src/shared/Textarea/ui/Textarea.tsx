import type { TextareaHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className, children, ...props }: IProps) {
	return (
		<textarea className={styles.textarea} {...props}>
			{children}
		</textarea>
	);
}
