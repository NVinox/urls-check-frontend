export default function validateUrls(urls: string[]): string {
	let err = "";

	if (!urls.length) {
		err = "Поле не должно быть пустым.";
	}

	const urlPattern =
		/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
	const hasInvalidUrl = urls.some((url) => !urlPattern.test(url));

	if (hasInvalidUrl) {
		err = "Одна или несколько ссылок введены некорректно. Проверьте формат.";
	}

	const uniqueUrlsSet = new Set(urls);

	if (uniqueUrlsSet.size !== urls.length) {
		err = "Ссылки не должны повторяться. Удалите дубликаты.";
	}

	return err;
}
