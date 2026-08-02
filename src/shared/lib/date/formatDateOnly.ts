export default function formatDateOnly(isoString: string): string {
	const date = new Date(isoString);

	return new Intl.DateTimeFormat("ru-RU", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	}).format(date);
}
