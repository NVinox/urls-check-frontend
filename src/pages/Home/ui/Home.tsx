import { useEffect } from "react";
import { JobList } from "@/widgets/JobList";

import { useJobStore } from "@/entities/job";

import { Title } from "@/shared/Title";
import { SectionLayout } from "@/shared/SectionLayout";
import { ContainerLayout } from "@/shared/ContainerLayout";

export default function Home() {
	const { jobs, fetchJobs, isLoading } = useJobStore();

	useEffect(() => {
		fetchJobs();
	}, [fetchJobs]);

	return (
		<SectionLayout type="secondary">
			<ContainerLayout>
				<Title>Главная</Title>

				<JobList jobs={jobs} isLoading={isLoading} />
			</ContainerLayout>
		</SectionLayout>
	);
}
