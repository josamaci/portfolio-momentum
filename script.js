document.addEventListener('DOMContentLoaded', async () => {
	$('#menu-toggle').click(function (e) {
		e.preventDefault();
		$('#wrapper').toggleClass('toggled');
		$('.navbar').toggleClass('toggled');
		$('.container-fluid').toggleClass('toggled');
	});

	$('#dark-mode-toggle').change(function (e) {
		e.preventDefault();
		$('body').toggleClass('dark-mode');
		$('#sidebar-wrapper').toggleClass('dark-mode');
		$('.list-group-item').toggleClass('dark-mode');
		$('.dropdown-menu').toggleClass('dark-mode');
		$('nav').toggleClass('dark-mode');
	});

	// Mostrar el loader
	document.querySelector('.loader-container').style.display = 'block';

	await createIdeaImages();

	// Ocultar el loader
	document.querySelector('.loader-container').style.display = 'none';
});

async function createIdeaImages() {
	const $fragment = document.createDocumentFragment(),
		$ideas = document.getElementById('ideas'),
		$template = document.getElementById('idea-template').content,
		numberIdeas = 19;

	for (let i = 1; i <= numberIdeas; i++) {
		let ruta = `./assets/img/ideacion/ideas/${i}.png`;
		if (await imagenExiste(ruta)) {
			$template.querySelector('img').setAttribute('src', ruta);
			$template.querySelector('img').setAttribute('alt', `Idea ${i}`);
			$template.querySelector('h3').textContent = `Idea ${i}`;
			let $clone = document.importNode($template, true);
			$fragment.appendChild($clone);
		}
	}

	$ideas.appendChild($fragment);
}

function imagenExiste(ruta) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.onload = () => resolve(true);
		img.onerror = () => resolve(false);
		img.src = ruta;
	});
}
