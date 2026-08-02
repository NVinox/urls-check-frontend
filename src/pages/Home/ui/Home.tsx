import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
		<>
			<Helmet>
				<title>Главная</title>
			</Helmet>

			<SectionLayout type="secondary">
				<ContainerLayout>
					<Title>Главная</Title>

					<JobList jobs={jobs} isLoading={isLoading} />
				</ContainerLayout>
			</SectionLayout>
		</>
	);
}
