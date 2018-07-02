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

const displayIndividualPageNumber = () => {
	//Display number of pages, up to 5? with "..." at end.  Splice with current page in middle of display.
	//page 5 display: ... 3 4 5 6 7 ...;

	
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

//displays type of button that is passed through and displays page number for next && || previous page
const createPageButton = (page, type) => `
	<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Go To Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <img class="search__icon"
            src="./images/${type === 'prev' ? 'left-' : 'right-'}arrows.svg">
        </img>   
    </button>
`;

const createPageNumberList = (page) =>  `
	<div class = "inline-pageNumbers">
		<div class = "page__numbers" data-goto=${page}>page: ${page}</div>
		<div class = "page__numbers" data-goto=${page + 1}>${page + 1}</div>
		<div class = "page__numbers" data-goto=${page + 2}>${page + 2}</div>
		<div class = "page__numbers" data-goto=${page + 3}>${page + 3}</div>
		<div class = "page__numbers" data-goto=${page + 4}>${page + 4}</div>
	</div>	
`;

//To Display Page Number List:
		// Take all page count: this.blogPost
		// Take current page in renderBlogPagination()
		//pass into renderBlogPagination



const currentPageDisplay = (page) => `
	<div class = current-page>
		<h4>Current Page: ${page}</h4>
	</div>
`;

const clearPageResultsBeforeLoadingNewPage = () => {
	//this will also clear out the buttons until buttons get moved to different div from posts
	querySelected.blogSection.innerHTML = '';
	//clearing out buttons for next page buttons:
}

//takes in this.blogResult from fetch for all blogPosts returned from fetch
//has variables to calculate pages, number of blogs per page and total posts
//calculates posts per page
//calculates current Page
const renderBlogPagination = (blogPosts, page = 1, postsPerPage = 2) => {
	console.log(blogPosts);
	const start = (page-1) * postsPerPage;
	const end = page * postsPerPage;

	//each blogPost gets passed in as argument to renderBlogPosts()
	blogPosts.slice(start, end).forEach(renderBlogPosts);

	renderPageButtons(page, blogPosts.length, postsPerPage);
	renderPageList(page, blogPosts.length, postsPerPage);

};


//calculates pages with passed in arguments
const renderPageButtons = (page, numPosts, postsPerPage) => {
	const pages = Math.ceil(numPosts/postsPerPage);
	let pageButton;
	// let pageList;
	if (page === 1 && pages > 1) {
		pageButton = `
			${currentPageDisplay(page)}</span>
			${pageButton = createPageButton(page, 'next')}
		`
		// pageButton = createPageButton(page, 'pext');
	} else if (page < pages) {
		pageButton = `
			${currentPageDisplay(page)}
			${createPageButton(page, 'next')}
			${createPageButton(page, 'prev')}

		`;
	} else if (page === pages && page > 1) {
		pageButton = `
			${currentPageDisplay(page)}
			${pageButton = createPageButton(page, 'prev')};
		`
	}
	querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);
};

const renderPageList = (page, numPosts, postsPerPage) => {
	let pageList;
	const pages = Math.ceil(numPosts/postsPerPage);

	if (page === 1 && pages > 1) {
		pageList = ` ${createPageNumberList(page)}
		`;
		querySelected.blogSection.insertAdjacentHTML('afterbegin', pageList);
	}
	
};



querySelected.blogSection.addEventListener('click', e => {
	const pageButton = e.target.closest('.btn-inline');
	const pageList = e.target.closest('.page__numbers');
	if (pageButton) {
		console.log(e);
		const goToPage = parseInt(pageButton.dataset.goto, 10);
		clearPageResultsBeforeLoadingNewPage();
		renderBlogPagination(blogResult, goToPage);
	}
	if (pageList) {
		console.log(e);
		const goToPage = parseInt(pageList.dataset.goto, 10);
		clearPageResultsBeforeLoadingNewPage();
		renderBlogPagination(blogResult, goToPage);
	}
});

getBlogs();