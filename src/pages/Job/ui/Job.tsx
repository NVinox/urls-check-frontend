import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { JobDetail } from "@/widgets/JobDetail";
import { UrlList } from "@/widgets/UrlList";

import { useJobStore } from "@/entities/job";

import { Title } from "@/shared/Title";
import { SectionLayout } from "@/shared/SectionLayout";
import { ContainerLayout } from "@/shared/ContainerLayout";

import { NOT_FOUND_ROUTE } from "@/shared/constants/constants";

export default function Job() {
	const { jobId } = useParams();
	const { job, isLoading, startPolling, stopPolling } = useJobStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (jobId) {
			startPolling(jobId).then((isSuccess) => {
				if (!isSuccess) {
					navigate(NOT_FOUND_ROUTE, { replace: true });
				}
			});
		}

		return () => {
			stopPolling();
		};
	}, [jobId]);

	return (
		<>
			<Helmet>
				<title>{`Задача ${jobId}`}</title>
			</Helmet>

			{isLoading ? (
				<SectionLayout type="secondary">
					<ContainerLayout>
						<p>Загрузка...</p>
					</ContainerLayout>
				</SectionLayout>
			) : (
				job && (
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
				)
			)}
		</>
	);
}
