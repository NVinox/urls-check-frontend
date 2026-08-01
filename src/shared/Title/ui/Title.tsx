import type { ReactNode } from "react";
import clsx from "clsx";

import styles from "./index.module.css";

interface IProps {
	children: ReactNode;
	variant?: "h1" | "h2" | "h3";
	className?: string;
}

export default function Title({ children, className, variant = "h1" }: IProps) {
	const Tag = variant;

	return <Tag className={clsx(styles[variant], className)}>{children}</Tag>;
}
