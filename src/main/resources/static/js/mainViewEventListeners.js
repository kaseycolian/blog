const setupEventListeners = () =>{
	const DOMStrings = {
		title: '.entry__title'
	}

	const titles = document.querySelectorAll(DOMStrings.title);

	for (let i = 0; i<titles.length; i++){
		titles[i].addEventListener('click', (event) => {
			console.log('clicked');
		})
	}
}

setupEventListeners();