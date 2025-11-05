import dompurify from "dompurify";

const allSearches = document.querySelectorAll(".keny-life-search");

allSearches.forEach((el) => bringSearchToLife(el));

function bringSearchToLife(el) {
	el.querySelector("input").addEventListener("input", handleChange);

	async function handleChange(e) {
		const ourCleanValue = encodeURIComponent(e.target.value);

		const resultPromise = await fetch(
			`/wp-json/wp/v2/posts?search=${ourCleanValue}`,
		);
		const results = await resultPromise.json();

		if (results.length) {
			el.querySelector(".results").innerHTML = generateHTML(results);
		} else {
			el.querySelector(".results").innerHTML = "";
		}
	}
}

function generateHTML(results) {
	let bigHTML = "";

	results.forEach((item) => {
		bigHTML += `<div>
        <h3><a href="${item.link}">${item.title.rendered}</a></h3>
        </div>`;
	});

	return dompurify.sanitize(bigHTML);
}
