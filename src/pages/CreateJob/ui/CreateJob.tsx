import { Helmet } from "react-helmet-async";

import { CreateForm } from "@/widgets/CreateForm";

import { ContainerLayout } from "@/shared/ContainerLayout";
import { SectionLayout } from "@/shared/SectionLayout";
import { Title } from "@/shared/Title";

export default function CreateJob() {
	return (
		<>
			<Helmet>
				<title>Создание воркера</title>
			</Helmet>

			<SectionLayout type="secondary">
				<ContainerLayout>
					<Title>Создание задачи</Title>

					<CreateForm />
				</ContainerLayout>
			</SectionLayout>
		</>
	);
}
