// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section')
} 
// const setupEventListeners = () =>{


// 	for (const cur of querySelected.allTitles){
// 		cur.addEventListener('click', (event) =>{
// 			console.log('clicked with For Of Loop in ES6');

// 			//opening up individal blog in new window
// 			let blogId = blogJsonData.id;
// 			window.open(`/blogEntry/${blogId}`);
// 		});
// 	}
// }

// setupEventListeners();
// const xhr = new XMLHttpRequest();


function getBlogs() {
	fetch(`/blogPosts`)
	.then(result => {
		return result.json();
	})
	.then(currentBlogs => {
		const blogPost = currentBlogs._embedded.blogPosts;
		const reverse = blogPost.reverse();
	
		for (const cur of reverse) {
			const markup = `

				<article class = "blog__entry" id = "entry__one" dataset = "post_1">
					<div class = "entry__title">
						<a href = ${cur._links.self.href}><h2>${cur.title}</h2></a>
					</div>
					<div class = "entry__info">
						<h4>${cur.creationDate} ~ ${cur._links.author.href} ~&nbsp</h4>
						<h4 class = "entry__topic">${cur.topic}</h4>
					</div>
					<div class = "entry__info__mobile">
						<h4>${cur.creationDate}</h4>
						<h4>AUTHOR GOES HERE</h4>
						<h4 class = "entry__topic">${cur.topic}</h4>
					</div>
					<p class = "entry__content">${cur.content}</p>
					<div class = article__separator>
					</div>
				</article>
			`
			querySelected.blogSection.insertAdjacentHTML('beforeend', markup);
		};
	})
	.catch(error => alert(`The error for this page is:

${error}`));
}
getBlogs();
