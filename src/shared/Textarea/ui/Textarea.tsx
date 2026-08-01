import clsx from "clsx";
import type { TextareaHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isError?: boolean;
}

export default function Textarea({
	className,
	children,
	isError = false,
	...props
}: IProps) {
	return (
		<textarea
			className={clsx(styles.textarea, { [styles.error]: isError })}
			{...props}
		>
			{children}
		</textarea>
	);
}
