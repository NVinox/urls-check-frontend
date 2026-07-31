import { JobList } from "@/widgets/JobList";

import { Title } from "@/shared/Title";
import { ContainerLayout } from "@/shared/ContainerLayout";

export default function Home() {
	return (
		<section>
			<ContainerLayout>
				<Title>Главная</Title>

				<JobList />
			</ContainerLayout>
		</section>
	);
}
