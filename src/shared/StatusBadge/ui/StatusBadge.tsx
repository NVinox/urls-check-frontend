import clsx from "clsx";

import {
	URL_STATUS,
	JOB_STATUS,
	type TJobStatus,
	type TUrlStatus,
} from "@/entities/job/model/types";

import styles from "./index.module.css";

interface IProps {
	status: TJobStatus | TUrlStatus;
	text: string;
}

export default function StatusBadge({ status, text }: IProps) {
	return (
		<span
			className={clsx(styles.status__badge, {
				[styles.pending]: status === URL_STATUS.PENDING,
				[styles.progress]: status === URL_STATUS.IN_PROGRESS,
				[styles.success]:
					status === URL_STATUS.SUCCESS || status === JOB_STATUS.COMPLETED,
				[styles.canceled]: status === URL_STATUS.CANCELLED,
				[styles.error]:
					status === URL_STATUS.ERROR || status === JOB_STATUS.FAILED,
			})}
		>
			{text}
		</span>
	);
}
