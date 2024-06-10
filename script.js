// DOM FUCTIONS
document.addEventListener('DOMContentLoaded', async () => {
	const $loader = document.querySelector('.loader-container');
	$loader.classList.remove('none');
	await createAllIdeas();
	await createFavoriteIdeas();
	$loader.classList.add('none');
});

document.getElementById('menu-toggle').addEventListener('click', (e) => {
	e.preventDefault();
	document.getElementById('wrapper').classList.toggle('toggled');
	document.querySelector('.navbar').classList.toggle('toggled');
	document.querySelector('.container-fluid').classList.toggle('toggled');
});

document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
	e.preventDefault();
	document.querySelector('body').classList.toggle('dark-mode');
	document.getElementById('sidebar-wrapper').classList.toggle('dark-mode');
	Array.from(document.getElementsByClassName('list-group-item')).forEach((item) =>
		item.classList.toggle('dark-mode')
	);
	Array.from(document.getElementsByClassName('dropdown-menu')).forEach((item) =>
		item.classList.toggle('dark-mode')
	);
	document.querySelector('nav').classList.toggle('dark-mode');
});

// UTILS FUNCTIONS
const createAllIdeas = async () => {
	const $fragment = document.createDocumentFragment(),
		$ideas = document.getElementById('ideas'),
		$template = document.getElementById('idea-template').content,
		numberIdeas = 50;

	for (let i = 1; i <= numberIdeas; i++) {
		let ruta = getImagePath(i);

		$template.querySelector('img').setAttribute('src', ruta);
		$template.querySelector('img').setAttribute('alt', `Idea ${i}`);
		$template.querySelector('h3').textContent = `Idea ${i}`;
		let $clone = document.importNode($template, true);
		if (i === 1) $clone.querySelector('.carousel-item').classList.add('active');
		$fragment.appendChild($clone);
	}

	$ideas.appendChild($fragment);
};
const createFavoriteIdeas = async () => {
	const favorites = [1, 14, 21],
		$fragment = document.createDocumentFragment(),
		$template = document.getElementById('favorite-idea-template').content,
		$favoriteIdeas = document.getElementById('favorite-ideas');
	for (let i = 0; i < favorites.length; i++) {
		let ruta = getImagePath(favorites[i]);

		$template.querySelector('img').setAttribute('src', ruta);
		$template.querySelector('img').setAttribute('alt', `Idea ${favorites[i]}`);
		let $clone = document.importNode($template, true);
		$fragment.appendChild($clone);
	}
	$favoriteIdeas.appendChild($fragment);
};
const getImagePath = (name) => `./assets/img/ideacion/ideas/${name}.png`;
