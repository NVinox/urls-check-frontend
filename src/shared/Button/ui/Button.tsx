import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

export default function Button({
	variant = "primary",
	children,
	...props
}: IProps) {
	return (
		<button
			className={clsx(styles.button, {
				[styles.button__primary]: variant === "primary",
				[styles.button__secondary]: variant === "secondary",
			})}
			{...props}
		>
			{children}
		</button>
	);
}
