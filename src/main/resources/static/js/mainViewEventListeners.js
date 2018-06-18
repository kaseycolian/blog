const setupEventListeners = () =>{
	const DOMStrings = {
		title: '.entry__title'
	} 

	const titles = document.querySelectorAll(DOMStrings.title);
	//regular For Each Loop
	/*
	for (let i = 0; i<titles.length; i++){
		titles[i].addEventListener('click', (event) => {
			console.log('clicked');
		});
	}
	*/
	//For Of Loop (ES6)
	for (const cur of titles){
		cur.addEventListener('click', (event) =>{
			console.log('clicked with For Of Loop in ES6');
		});
	}
}

setupEventListeners();