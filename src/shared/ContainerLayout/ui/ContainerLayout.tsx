import type { ReactNode } from "react";

import styles from "./index.module.css";

interface IProps {
	children?: ReactNode;
}

export default function ContainerLayout({ children }: IProps) {
	return <div className={styles.container}>{children}</div>;
}
