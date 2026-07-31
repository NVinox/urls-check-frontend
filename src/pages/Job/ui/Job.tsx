import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { JobDetail } from "@/widgets/JobDetail";

import { useJobStore } from "@/entities/job";

import { Title } from "@/shared/Title";
import { SectionLayout } from "@/shared/SectionLayout";
import { ContainerLayout } from "@/shared/ContainerLayout";

export default function Job() {
	const { jobId } = useParams();
	const { fetchJob, job, isLoading } = useJobStore();

	useEffect(() => {
		if (jobId) {
			fetchJob(jobId);
		}
	}, [fetchJob, jobId]);

	return (
		<SectionLayout type="secondary">
			<ContainerLayout>
				{isLoading ? (
					<p>Загрузка...</p>
				) : job ? (
					<>
						<Title>{job.jobId}</Title>
						<JobDetail job={job} />
					</>
				) : (
					<p>Нет данных</p>
				)}
			</ContainerLayout>
		</SectionLayout>
	);
}
