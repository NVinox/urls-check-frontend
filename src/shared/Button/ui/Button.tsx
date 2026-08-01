import type { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "main" | "delete";
}

export default function Button({
	variant = "main",
	children,
	...props
}: IProps) {
	return <button {...props}>{children}</button>;
}
