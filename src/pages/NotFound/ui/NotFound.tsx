import { ContainerLayout } from "@/shared/ContainerLayout";
import { SectionLayout } from "@/shared/SectionLayout";
import { Title } from "@/shared/Title";

export default function NotFound() {
	return (
		<SectionLayout type="secondary">
			<ContainerLayout>
				<Title>Страница не найдена</Title>
			</ContainerLayout>
		</SectionLayout>
	);
}
