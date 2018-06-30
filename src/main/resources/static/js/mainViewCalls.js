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
			const blogPosts = currentBlogs._embedded.blogPosts.reverse();
			const reverseOrderBlogsToDisplay = blogPosts;

			// function markup (objectName) {
			// 	console.log(objectName);
			// 	`<article class = "blog__entry" id = "entry__one" dataset = "post_1">
			// 		<div class = "entry__title">
			// 			<a href = ${objectName._links.blogPost.href} ><h2>${objectName.title}</h2></a>
			// 		</div>
			// 		<div class = "entry__info">
			// 			<h4>${objectName.creationDate} ~ ${objectName._links.author.href} ~&nbsp</h4>
			// 			<h4 class = "entry__topic">${objectName.topic}</h4>
			// 		</div>
			// 		<div class = "entry__info__mobile">
			// 			<h4>${objectName.creationDate}</h4>
			// 			<h4>${objectName._links.author.href}</h4>
			// 			<h4 class = "entry__topic">${objectName.topic}</h4>
			// 		</div>
			// 		<p class = "entry__content">${objectName.content}</p>
			// 		<div class = article__separator>
			// 		</div>
			// 	</article>`;
			// };

			if (blogPosts.length > 3) {

				const displayedBlogs = reverseOrderBlogsToDisplay.slice(0, 3);
		
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
				};
			} else {
				for (blogPost of reverseOrderBlogsToDisplay) {
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
	.catch(function(error) {		// window.location ="http://localhost:8080/notfound"
			// console.log(error);
			throw `oh no! ${error}`;
/*
		alert(`The error for this page is:

${error}`));
	*/
// 	}).then(function(){
// 		console.log(`make it to the last then`);
// 		const blogNotLoadingMarkup = `
// 			<article class = "blog__entry>
// 				<h2>Blog not found</h2>
// 			</article>
// 		`
// 		querySelected.blogSection.insertAdjacentHTML('beforeend', blogNotLoadingMarkup);
	});

}

getBlogs();