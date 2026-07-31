import { JobList } from "@/widgets/JobList";

import { useJobStore } from "@/entities/job";

import { Title } from "@/shared/Title";
import { ContainerLayout } from "@/shared/ContainerLayout";

export default function Home() {
	const jobs = useJobStore((state) => state.jobs);

	return (
		<section>
			<ContainerLayout>
				<Title>Главная</Title>

				<JobList jobs={jobs} />
			</ContainerLayout>
		</section>
	);
}
