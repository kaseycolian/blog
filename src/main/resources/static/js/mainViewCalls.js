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


// xhr.onreadystatechange = function() {

// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		const res = JSON.parse(xhr.responseText);
// 		console.log(`using XHR:`);
// 		console.log(res);
// 		// for (const title of res) {
// 		// 	title.innerText = title;
// 		// }
// 	}
// }
// xhr.open ('GET', '/blogPosts', true);
// xhr.send();


function getBlogs() {
	fetch(`/blogPosts`)
	.then(result => {
		console.log(`using fetch:`);
		console.log(result);
		return result.json();
	})
	.then(currentBlogs => {
		console.log(currentBlogs);
		const blogPost = currentBlogs._embedded.blogPosts;
		console.log(blogPost);
	
	
		for (const cur of blogPost) {
			console.log(cur);
			const markup = `

		<article class = "blog__entry" id = "entry__one" dataset = "post_1">
			<div class = "entry__title">
				<a href = "https://localhost:8080/survivingCodingBootCamp.html/blogEntryId=3"><h2>${cur.title}</h2></a>
			</div>
			<div class = "entry__info">
				<h4>${cur.creationDate} ~ AUTHOR GOES HERE ~&nbsp</h4>
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
		}
	})
	.catch(error => alert(`The error for this page is:

${error}`));
}

// const displayBlogPosts = blog => {
// 	const markup = `

// 		<article class = "blog__entry" id = "entry__one" dataset = "post_1">
// 			<div class = "entry__title">
// 				<a href = "https://localhost:8080/survivingCodingBootCamp.html/blogEntryId=3"><h2>${blog.title}</h2></a>
// 			</div>
// 			<div class = "entry__info">
// 				<h4>DATE GOES HERE ~ AUTHOR GOES HERE ~&nbsp</h4>
// 				<h4 class = "entry__topic">TOPIC GOES HERE</h4>
// 			</div>
// 			<div class = "entry__info__mobile">
// 				<h4>DATE GOES HERE</h4>
// 				<h4>AUTHOR GOES HERE</h4>
// 				<h4 class = "entry__topic">TOPIC GOES HERE</h4>
// 			</div>
// 			<p class = "entry__content">BLOG CONTENT GOES HERE</p>
// 			<div class = article__separator>
// 			</div>
// 		</article>
// 	`
// }

getBlogs();
// console.log(`This is the mainViewCalls.js file from src directory.`);