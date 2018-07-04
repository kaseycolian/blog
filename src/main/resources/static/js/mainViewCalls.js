// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section'),
	header: document.querySelector('.headerH1'),
	pageNumberNavigation: document.querySelector('.inline-pageNumbers'),
	navBar: document.querySelector('nav')
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

const clearPageResultsBeforeLoadingNewPage = () => {
	//clears out the buttons & posts on current page when going to next page
	querySelected.blogSection.innerHTML = '';
	//clears out nav pageList for next page's nav pageList
	querySelected.navBar.innerHTML = '';
}

const calculatePages = (numPosts, postsPerPage) => {
	const pages = Math.ceil(numPosts/postsPerPage);
	return pages;
};

//takes in this.blogResult from fetch for all blogPosts returned from fetch
//has variables to calculate pages, number of blogs per page and total posts
//calculates posts per page
//calculates current Page
const renderBlogPagination = (blogPosts, page = 1, postsPerPage = 3) => {
	console.log(blogPosts);
	const start = (page-1) * postsPerPage;
	const end = page * postsPerPage;

	//each blogPost gets passed in as argument to renderBlogPosts()
	blogPosts.slice(start, end).forEach(renderBlogPosts);

	renderPageButtons(page, blogPosts.length, postsPerPage);
	renderPageList(page, blogPosts.length, postsPerPage);
	// renderLimitedPageNumbers(blogPosts.length, postsPerPage);
};

const renderPageList = (page, numPosts, postsPerPage) => {
	let pageCount = 1;
	const pages = calculatePages(numPosts, postsPerPage);
	const allPages = [];

	for (let i = 0; i < pages; i++) {
			allPages[i] = pageCount;
			pageCount++;
	}
	console.log(`all pages array: ${allPages}`); //returns 1, 2, 3, 4, 5, 6, 7
	const lastPage = allPages.length; //returns 7
	const penultimatePage = allPages[allPages.length-2]; //returns 6
	const thirdFromLastPage = allPages[allPages.length-3]; //returns 5
	const firstPage = allPages.slice(0,1); //returns 1
	const first5Pages = allPages.slice(0, 5); //returns 1, 2, 3, 4, 5

	if (page <= 3 ) { 
		const pageNumberDisplay = `
		<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
		<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
		<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
		<div class = "page__numbers" class = "inactive" data-goto=${page+3}>${page+3}</div>
		`
		 querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay)
	} else if (allPages.length >= 1 && first5Pages.length<=4 && (page != lastPage || page != penultimatePage || page != thirdFromLastPage)) {
		//this will display all pages under 7 pages at once
		for (cur of allPagesReversed) {
			if (cur === page ) {
				const pageNumberDisplay = `
				<div class = "page__numbers" id="active__page" data-goto=${cur}>${cur}</div>
				`
				querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			} else {
				const pageNumberDisplay = `
					<div class = "page__numbers" class = "inactive" data-goto=${cur}>${cur}</div>
				`
				querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			}
		}

	} else if (allPages.length >= 5 && page != (lastPage || penultimatePage || thirdFromLastPage)) {
		const pageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
				`
				querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);

	} else if (page === lastPage || page === penultimatePage) {
		const pageNumberDisplay = `
			<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
			<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
			<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
			<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
		`
		querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
	}
};

//calculates pages with passed in arguments
const renderPageButtons = (page, numPosts, postsPerPage) => {
	const pages = calculatePages(numPosts, postsPerPage);
	let pageButton;

	if (page === 1 && pages > 1) {
		pageButton = 			
			createPageButton(page, 'next');
	} else if (page < pages) {
		pageButton = `
			${createPageButton(page, 'next')}
			${createPageButton(page, 'prev')}
		`;
	} else if (page === pages && page > 1) {
		pageButton = 
			createPageButton(page, 'prev');
	}
	querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);
};

querySelected.blogSection.addEventListener('click', e => {
	const pageButton = e.target.closest('.btn-inline');
	if (pageButton) {
		const goToPage = parseInt(pageButton.dataset.goto, 10);
		clearPageResultsBeforeLoadingNewPage();
		renderBlogPagination(blogResult, goToPage);
	}
});

querySelected.navBar.addEventListener('click', e => {
	const pageList = e.target.closest('.page__numbers');
	if (pageList) {
		const goToPage = parseInt(pageList.dataset.goto, 10);
		clearPageResultsBeforeLoadingNewPage();
		renderBlogPagination(blogResult, goToPage);
	}
});

getBlogs();