import { CreateForm } from "@/widgets/CreateForm";

import { ContainerLayout } from "@/shared/ContainerLayout";
import { SectionLayout } from "@/shared/SectionLayout";
import { Title } from "@/shared/Title";

export default function CreateJob() {
	return (
		<SectionLayout type="secondary">
			<ContainerLayout>
				<Title>Создание задачи</Title>

				<CreateForm />
			</ContainerLayout>
		</SectionLayout>
	);
}
