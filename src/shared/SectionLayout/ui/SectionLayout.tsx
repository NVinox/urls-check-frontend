import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

interface IProps {
	type?: "secondary";
	children: ReactNode;
}

export default function SectionLayout({ type, children }: IProps) {
	return (
		<section
			className={clsx(
				type === "secondary" ? styles.section__secondary : styles.section,
			)}
		>
			{children}
		</section>
	);
}
