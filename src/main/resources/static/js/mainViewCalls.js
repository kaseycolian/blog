// import axios from 'axios';

const querySelected = {
	title: document.querySelector('.entry__title'),
	allTitles: document.querySelectorAll('.title'),
	blogSection: document.querySelector('section'),
	header: document.querySelector('.headerH1'),
	pageNumberNavigation: document.querySelector('.inline-pageNumbers'),
	navBar: document.querySelector('nav'),
	pageList: document.querySelector('.pageList')

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
		}		
		postBlogs();	
		return currentBlogs;
	})
	.catch(function(error) {					
			console.log(error);
	})
};

const renderAuthor = blogPost => {
	fetch(blogPost._links.author.href)
		.then(authorResult => {
			if (!(authorResult.ok)){
			window.location ="http://localhost:8080/notfound";
			console.log('could not connect');
			}
			return authorResult.json();
		})
		.then(authorLinkJson => { 			
			console.log(authorLinkJson)
			this.authorFirstName = authorLinkJson.authorFirstName;
			console.log(authorFirstName);
			this.authorLastName = authorLinkJson.authorLastName;
			console.log(authorLastName)
		})
		.catch(function(error) {					
			console.log(error);
		})
};

//takes in this.blogResult from fetch for all blogPosts returned from fetch
//has variables to calculate pages, number of blogs per page and total posts
//calculates posts per page
//calculates current Page
const renderBlogPagination = (blogPosts, page = 1, postsPerPage = 3) => {
	// console.log(blogPosts);
	const start = (page-1) * postsPerPage;
	const end = page * postsPerPage;

	//each blogPost gets passed in as argument to renderBlogPosts()
	blogPosts.slice(start, end).forEach(renderBlogPosts);
	// blogPosts.slice(start, end).forEach(renderAuthor);

	renderPageButtons(page, blogPosts.length, postsPerPage);
	renderPageList(page, blogPosts.length, postsPerPage);
	// renderLimitedPageNumbers(blogPosts.length, postsPerPage);
};

const renderBlogPosts = blogPost => {
	console.log(blogPost);
	const T = 'T';
	//only need to reference edidedDate & editedTime in markup from its variable in splitString();
	const dateAndTime = renderDateAndTime(blogPost.creationDate, T);
	const author = renderAuthor(blogPost);
	// console.log(authorFirstName)

	const markup =  `
		<article class = "blog__entry" id = "entry__one" dataset = "post_1">
			<div class = "entry__title">
				<div class = "entry__link">
					<a href = ${blogPost._links.blogPost.href} ><h2>${blogPost.title}</h2></a>
				</div>
			</div>
			<div class = "entry__info">
				<h4>${editedDate} ~ ${editedTime} ~ ${blogPost._links.author.href.authorFirstName} ~&nbsp</h4>
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

const renderPageList = (page, numPosts, postsPerPage) => {
	let pageCount = 1;
	const pages = calculatePages(numPosts, postsPerPage);
	const allPages = [];
	//returns count of all pages in an Array of allPages
	for (let i = 0; i < pages; i++) {
			allPages[i] = pageCount;
			pageCount++;
	}

	const lastPage = allPages.length; //returns 7
	const penultimatePage = allPages[allPages.length-2]; //returns 6
	const thirdFromLastPage = allPages[allPages.length-3]; //returns 5
	const firstPage = allPages.slice(0,1); //returns 1
	const first4Pages = allPages.slice(0, 6); //returns 1, 2, 3, 4, 5
	
	const renderFirstPageDisplay = () => {
		const firstPageToDisplay = 	 `
		<div class = "page__numbers" class = "inactive" data-goto=${firstPage}>[${firstPage}...]</div>
		`;		
		querySelected.navBar.insertAdjacentHTML('afterbegin', firstPageToDisplay);
	};
	const renderLastPageDisplay = () => {
		const lastPageDisplay = `
		<div class = "page__numbers" class = "inactive" data-goto=${lastPage}>[...${lastPage}]</div>
		`;
		querySelected.navBar.insertAdjacentHTML('beforeend', lastPageDisplay);
	};
	const renderPageListLoop = () => {
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
	};

	//displays all pages if less than 5 total pages
	if (allPages.length <= 5) { 
		for (cur of allPages.reverse()) {
			renderPageListLoop();
		}
	} else if (allPages.length > 4 ) {
		if (page < 4 && page != penultimatePage && page != lastPage) {
			for (cur of first4Pages.reverse()) {
			renderPageListLoop();
			}
			renderLastPageDisplay();
		} else if (page >= 4 && page<allPages[allPages.length-4]) {
			const mobileView = window.matchMedia('(max-width: 320px)');

			//if pages is greater than 4 & less than 4 from end
			const pageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+3}>${page+3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+4}>${page+4}</div>
				`;

			const mobilePageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+3}>${page+3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+4}>${page+4}</div>
				`;

			if (mobileView.matches && page != 4) {
				console.log(`first mobile`);
				querySelected.navBar.insertAdjacentHTML('afterbegin', mobilePageNumberDisplay);
				renderFirstPageDisplay();
				renderLastPageDisplay();

			} else if (mobileView.matches) {
				console.log(`2nd mobile`);
				querySelected.navBar.insertAdjacentHTML('afterbegin', mobilePageNumberDisplay);
				renderLastPageDisplay();

			} else if (page != 4) {
				querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
				renderFirstPageDisplay();
				renderLastPageDisplay();
			} 
			 else  {
			querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			renderLastPageDisplay();
			}
		} else if (page === allPages[allPages.length-4]) {
			//when pages is 4th to last
			const pageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+3}>${page+3}</div>
				`
			querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			renderFirstPageDisplay();
			renderLastPageDisplay();
		} else if (page === allPages[allPages.length-3]) {
			//when page is 3rd to last page
			const pageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+2}>${page+2}</div>
				`
			querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			renderFirstPageDisplay();
			renderLastPageDisplay();
		} else if ( page === penultimatePage) {
			//when page is next to last page
			const pageNumberDisplay = `
				<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page+1}>${page+1}</div>
				`
			querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			renderFirstPageDisplay();
			renderLastPageDisplay();
		} else if ( page === lastPage) {
			const pageNumberDisplay = `		
				<div class = "page__numbers" class = "inactive" data-goto=${page-4}>${page-4}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-3}>${page-3}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-2}>${page-2}</div>
				<div class = "page__numbers" class = "inactive" data-goto=${page-1}>${page-1}</div>
				<div class = "page__numbers" id="active__page" data-goto=${page}>${page}</div>
				`
			querySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);
			renderFirstPageDisplay();
			renderLastPageDisplay();
		}
	}
}
const renderDateAndTime = (stringToSplit, separator) => {
		 const arrayOfStrings = stringToSplit.split(separator);

		 //this.date & this.time defines each markup when called in renderBlogPosts as this specific instance of date & time - removed const & added to edited date & time
		 const date = arrayOfStrings[0];
		 const timeUnedited = arrayOfStrings[1];
		 //removes the milliseconds
		 this.editedTime = timeUnedited.substring(0, timeUnedited.length-4);

		 //moves year to end of date
		 const monthAndDay = date.substring(5, date.length);
		 const year = date.substring(0, 4);
		 this.editedDate = `${monthAndDay}-${year}`;
}
//calculates pages with passed in arguments
const renderPageButtons = (page, numPosts, postsPerPage) => {
	const pages = calculatePages(numPosts, postsPerPage);
	let pageButton;

	if (page === 1 && pages > 1) {
		pageButton = 			
			createPageButton(page, 'next');
			querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);
	} else if (page < pages) {
		pageButton = `
			${createPageButton(page, 'next')}
			${createPageButton(page, 'prev')}
		`
		querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);
	} else if (page === pages && page > 1) {
		pageButton = 
			createPageButton(page, 'prev');
			querySelected.blogSection.insertAdjacentHTML('afterbegin', pageButton);
	}
	
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