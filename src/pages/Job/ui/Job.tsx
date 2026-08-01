import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { JobDetail } from "@/widgets/JobDetail";
import { UrlList } from "@/widgets/UrlList";

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

	return isLoading ? (
		<SectionLayout type="secondary">
			<ContainerLayout>
				<p>Загрузка...</p>
			</ContainerLayout>
		</SectionLayout>
	) : job ? (
		<>
			<SectionLayout type="secondary">
				<ContainerLayout>
					<Title>{job.jobId}</Title>
					<JobDetail job={job} />
				</ContainerLayout>
			</SectionLayout>

			<SectionLayout>
				<ContainerLayout>
					<UrlList urls={job.urls} />
				</ContainerLayout>
			</SectionLayout>
		</>
	) : (
		<SectionLayout type="secondary">
			<ContainerLayout>
				<p>Нет данных</p>
			</ContainerLayout>
		</SectionLayout>
	);
}
