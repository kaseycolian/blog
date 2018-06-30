// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section'),
	header: document.querySelector('.headerH1')
} 

function getBlogs() {
	fetch(`/blogPosts`)
	.then(result => {
		if (!(result.ok)){
			window.location ="http://localhost:8080/notfound";
			console.log('could not connect');
		}
		return result.json();
	})
	.then(currentBlogs => {		

		function postBlogs() {		
			const blogPosts = currentBlogs._embedded.blogPosts.reverse();
			// const reverseOrderBlogsToDisplay = blogPosts;
			

			// const markup = () => { 
			// 	`<article class = "blog__entry" id = "entry__one" dataset = "post_1">
			// 		<div class = "entry__title">
			// 			<a href = ${reverseOrderBlogsToDisplay._links.blogPost.href} ><h2>${reverseOrderBlogsToDisplay.title}</h2></a>
			// 		</div>
			// 		<div class = "entry__info">
			// 			<h4>${reverseOrderBlogsToDisplay.creationDate} ~ ${reverseOrderBlogsToDisplay._links.author.href} ~&nbsp</h4>
			// 			<h4 class = "entry__topic">${reverseOrderBlogsToDisplay.topic}</h4>
			// 		</div>
			// 		<div class = "entry__info__mobile">
			// 			<h4>${reverseOrderBlogsToDisplay.creationDate}</h4>
			// 			<h4>${reverseOrderBlogsToDisplay._links.author.href}</h4>
			// 			<h4 class = "entry__topic">${reverseOrderBlogsToDisplay.topic}</h4>
			// 		</div>
			// 		<p class = "entry__content">${reverseOrderBlogsToDisplay.content}</p>
			// 		<div class = article__separator>
			// 		</div>
			// 	</article>`;
			// };

			if (blogPosts.length > 3) {

				const displayedBlogs = blogPosts.slice(0, 3);	
				for (blogPost of displayedBlogs) {
					const markup =  `
						<article class = "blog__entry" id = "entry__one" dataset = "post_1">
							<div class = "entry__title">
								<div class = "entry__link">
									<a href = ${blogPost._links.blogPost.href} ><h2>${blogPost.title}</h2></a>
								</div>
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
				
				}	
				
			} else {
				for (blogPost of blogPosts) {
					const markup =  `
						<article class = "blog__entry" id = "entry__one" dataset = "post_1">
							<div class = "entry__title">
								<div class = "entry__link">
									<a href = ${blogPost._links.blogPost.href} ><h2>${blogPost.title}</h2></a>
								</div>
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
					`;				
					querySelected.blogSection.insertAdjacentHTML('beforeend', markup);
				}
			} 
		}
		postBlogs();	
	})
	.catch(function(error) {		
			
			console.log(error);
			// throw `oh no! ${error}`;	
	})

}

getBlogs();