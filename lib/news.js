const fetch = require("node-fetch");
const cheerio = require("cheerio");

const news = async (keyword) => {
	const results = await fetch(`http://sinhala.adaderana.lk/sinhala-hot-news.php`).catch(
		(e) => {
			throw "Error!. Unable to reach baiscopelk.";
		}
	);

	const resultsHtml = await results.text().catch((e) => {
		throw "Error!. Unable to extract baiscopelk html response.";
	});

	const $ = cheerio.load(resultsHtml);

	const searchResults = [];

	try {
		$(".news-story").each((i, element) => {
			
			const star = $(element).find(".story-text h2 a");
			const url = "http://sinhala.adaderana.lk/" + $(star).attr("href");
			searchResults.push({ url });
		});
	} catch (e) {
		throw "Error!. Unable to parse baiscopelk search results.";
	}

	if (searchResults.length == 0) {
		throw "No subtitles found for that keyword!.";
	}

	return searchResults;
};

module.exports = {
	news,
};
