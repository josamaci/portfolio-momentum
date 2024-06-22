// DOM FUCTIONS
document.addEventListener('DOMContentLoaded', async () => {
	await createAllIdeas();
});

// UTILS FUNCTIONS
const createAllIdeas = async () => {
	const $fragment = document.createDocumentFragment(),
		$ideas = document.getElementById('ideas-carousel'),
		$template = document.getElementById('idea-template').content,
		numberIdeas = 50;

	for (let i = 1; i <= numberIdeas; i++) {
		let path = getImagePath(i);
		if (!(await existsImage(path))) continue;

		$template.querySelector('img').setAttribute('src', path);
		$template.querySelector('img').setAttribute('alt', `Idea ${i}`);
		$template.querySelector('h3').textContent = `Idea ${i}`;
		let $clone = document.importNode($template, true);
		if (i === 1) $clone.querySelector('.carousel-item').classList.add('active');
		$fragment.appendChild($clone);
	}

	$ideas.appendChild($fragment);
};

const existsImage = (path) => {
	const img = new Image();
	img.src = path;
	return new Promise((resolve) => {
		img.onload = () => resolve(true);
		img.onerror = () => resolve(false);
	});
};
const getImagePath = (name) => `./images/ideas/${name}.png`;
