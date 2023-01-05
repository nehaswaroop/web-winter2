/*function printLanguagesOlderThan(age) {
	const languages = [
		{ name: "JavaScript", release: "1995" },
		{ name: "Java", release: "1995" },
		{ name: "C#", release: "2001" },
		{ name: "C", release: "1972" },
		{ name: "Dart", release: "2011" },
	];
	const today = new Date();
	const year = today.getFullYear();

	languages.forEach((e) => {
		if (year - ~~e.release > age) console.log(e.name);
	});
}
printLanguagesOlderThan(23);*/

const languages = [
	{ name: "JavaScript", release: "1995" },
	{ name: "Java", release: "1995" },
	{ name: "C#", release: "2001" },
	{ name: "C", release: "1972" },
	{ name: "Dart", release: "2011" },
];
function findOldLangs(age, langs) {
	const oldLangs = langs.filter((lang) => new Date().getFullYear() - +lang.release >= age);
	for (const lang of oldLangs) {
		console.log(lang.name);
	}
}
findOldLangs(23, languages);
