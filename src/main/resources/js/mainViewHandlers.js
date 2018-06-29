
import num from './test';
console.log(`This is the mainViewHanlders.js file from src directory`);
console.log(`I imported ${num} from the test.js module and this is the mainViewHandlers.js file`);


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

			//opening up individal blog in new window
			let blogId = blogJsonData.id;
			window.open(`/blogEntry/${blogId}`);
		});
	}
}

setupEventListeners();