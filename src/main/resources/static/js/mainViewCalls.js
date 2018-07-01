// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section'),
	header: document.querySelector('.headerH1')
	// pageButtons: document.querySelector
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
			this.blogResult = blogPosts;
			renderBlogPagination(blogPosts);
			// return blogPosts;
		}		
		postBlogs();	
	})
	.catch(function(error) {					
			console.log(error);
	})
}

const renderBlogPagination = (blogPosts, page = 1, postsPerPage = 2) => {
	console.log(blogPosts);

	const start = (page-1) * postsPerPage;

	const end = page * postsPerPage;

	blogPosts.slice(start, end).forEach(renderBlogPosts);

	renderPageButtons(page, blogPosts.length, postsPerPage);

};

const renderBlogPosts = blogPost => {
	console.log(blogPost);
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
};

const createPageButton = (page, type) => `
	<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="./images/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>   
    </button>
`;

const renderPageButtons = (page, numPosts, postsPerPage) => {
	const pages = Math.ceil(numPosts/postsPerPage);
	let pageButton;

	if (page === 1 && pages > 1) {
		pageButton = createPageButton(page, 'next')
		pageButton = createPageButton(page, 'pext');
	} else if (page < pages) {
		pageButton = `
			${createPageButton(page, 'next')}
			${createPageButton(page, 'prev')}

		`;
	} else if (page === pages && page > 1) {
		pageButton = createPageButton(page, 'prev');
	}

	querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);

};

const clearPageResultsBeforeLoadingNewPage = () => {
	//this will also clear out the buttons until buttons get moved to different div from posts
	querySelected.blogSection.innerHTML = '';
	//clearing out buttons for next page buttons:


}


querySelected.blogSection.addEventListener('click', e => {
	const pageButton = e.target.closest('.btn-inline');

	if (pageButton) {
		const goToPage = parseInt(pageButton.dataset.goto, 10);
		clearPageResultsBeforeLoadingNewPage();
		renderBlogPagination(blogResult, goToPage);
	}

});



getBlogs();