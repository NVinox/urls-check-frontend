export default function formatSeconds(ms: number): string {
	const seconds = (ms / 1000).toFixed(2);

	return `${seconds} сек`;
}
