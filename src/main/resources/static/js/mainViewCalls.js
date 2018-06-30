// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section')
} 

function getBlogs() {
	fetch(`/blogPosts`)
	.then(result => {
		return result.json();
	})
	.then(currentBlogs => {		
		
		function postBlogs() {		
			const blogPosts = currentBlogs._embedded.blogPosts;

			const reverseOrderBlogsToDisplay = blogPosts.reverse().slice(0,3);
				
			for (blogPost of reverseOrderBlogs) {
				const markup = `
					<article class = "blog__entry" id = "entry__one" dataset = "post_1">
						<div class = "entry__title">
							<a href = ${blogPost._links.blogPost.href} ><h2>${blogPost.title}</h2></a>
						</div>
						<div class = "entry__info">
							<h4>${blogPost.creationDate} ~ ${blogPost._links.author.href} ~&nbsp</h4>
							<h4 class = "entry__topic">${blogPost.topic}</h4>
						</div>
						<div class = "entry__info__mobile">
							<h4>${blogPost.creationDate}</h4>
							<h4>${blogPost._links.author.href}</h4>
							<h4 class = "entry__topic">${blogPost.topic}</h4>
						</div>
						<p class = "entry__content">${blogPost.content}</p>
						<div class = article__separator>
						</div>
					</article>
				`
				querySelected.blogSection.insertAdjacentHTML('beforeend', markup);
			};

		};		
		postBlogs();	
	})
	.catch(error => 
		// window.location ="http://localhost:8080/notfound");
		alert(`The error for this page is:

${error}`));
}
getBlogs();
