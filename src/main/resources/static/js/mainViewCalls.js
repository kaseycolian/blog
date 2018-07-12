// import axios from 'axios';

const querySelected = {
	blogSection: document.querySelector('.blog-posts'),
	pageNumberNavigation: document.querySelector('.inline-pageNumbers'),
	navBar: document.querySelector('nav'),
	pageList: document.querySelector('.pageList'),
	pageButtonSection: document.querySelector('.page-buttons')
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
		console.log(currentBlogs)
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

getBlogs();

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
			function postAuthors() {	
				const authorNames = authorLinkJson.authorFirstName;
				this.authorFirstName = authorNames;
				console.log(authorFirstName);
				this.authorLastName = authorLinkJson.authorLastName;
				console.log(authorLastName)
			}
			postAuthors();
			return authorLinkJson;
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

	renderPageButtons(page, blogPosts.length, postsPerPage);
	renderPageList(page, blogPosts.length, postsPerPage);
	// renderLimitedPageNumbers(blogPosts.length, postsPerPage);
};

const renderBlogPosts = blogPost => {
	console.log(blogPost);
	const T = 'T';
	//only need to reference edidedDate & editedTime in markup from its variable in splitString();
	const dateAndTime = renderDateAndTime(blogPost.creationDate, T);
	const linkSeparator = '/'
	getIndividualBlogId(blogPost._links.blogPost.href, linkSeparator);

	const spaceSeparator = ' ';
	renderBlogContentDisplay(blogPost.content, spaceSeparator);

	// renderAuthor(blogPost);
	// console.log(renderAuthor(authorFirstName))

	const markup =  `
		<article class = "blog__entry" id = "entry__one" dataset = "post_1">
			<div class = "entry__title">
				<div class = "entry__link">
					<a href = blogPost.html/${blogId} target='_blank' ><h2>${blogPost.title}</h2></a>
				</div>
			</div>
			<div class = "entry__info">
				<h4>${editedDate} ~ ${editedTime} ~ ${blogId} ~&nbsp</h4>
				<h4 class = "entry__topic">${blogPost.topic}</h4>
			</div>
			<div class = "entry__info__mobile">
				<h4>${editedDate} ~ ${editedTime}</h4>
				<h4>${blogPost._links.author.href}</h4>
				<h4 class = "entry__topic">${blogPost.topic}</h4>
			</div>
			<p class = "entry__content">${blogContent}</p>
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

//gets blogID from each blog's link (last index in Array made from splitting URL string) - called in renderBlogPost()
const getIndividualBlogId = (stringToSplit, separator) => {
	const arrayOfLinkStrings = stringToSplit.split(separator);
	this.blogId = arrayOfLinkStrings[arrayOfLinkStrings.length - 1];
	console.log(blogId);
}

//limits amount of words displayed in blog content & adds '...' to posts that are over set limit - called in renderBlogPost()
const renderBlogContentDisplay = (stringToSplit, separator, allowedWordCount = 200) => {
	const arrayOfBlogContentWords = stringToSplit.split(separator);
	if (arrayOfBlogContentWords.length > allowedWordCount) {		
		const contentArray = arrayOfBlogContentWords.slice(0, allowedWordCount);
		const moreToComeMarkUp = `
			<strong style="color: yellow; font-size: 2rem">...</strong>
		`;
		contentArray.push(moreToComeMarkUp);
		contentArray[contentArray.length-1];
		this.blogContent = contentArray.join(" ");
	} else {
		this.blogContent = stringToSplit;
	}
}

//creates formatting for proper date & time of creation. called in renderBlogPost()
const renderDateAndTime = (stringToSplit, separator) => {
		 const arrayOfStrings = stringToSplit.split(separator);

		 //this.date & this.time defines each markup when called in renderBlogPosts as this specific instance of date & time - removed const & added to edited date & time
		 const date = arrayOfStrings[0];
		 const timeUnedited = arrayOfStrings[1];
		 //removes the milliseconds
		 this.editedTime = timeUnedited.substring(0, timeUnedited.length-4);

		 //moves year to end of date by selecting substring elements and declaring in template literal
		 const monthAndDay = date.substring(5, date.length);
		 const year = date.substring(0, 4);
		 this.editedDate = `${monthAndDay}-${year}`;
}
//calculates pages with passed in arguments
const renderPageButtons = (page, numPosts, postsPerPage) => {
	const pages = calculatePages(numPosts, postsPerPage);
	let pageButton;

	if (page === 1 && pages > 1) {
		pageButton = `
			${createPageButton(page, 'prev', 'hidden')}		
			${createPageButton(page, 'next')}
			`
			// document.querySelector(".btn-inline.results__btn--prev").style.display = none;
			querySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);
	} 
	else if (page < pages) {
		pageButton = `
			${createPageButton(page, 'prev')}
			${createPageButton(page, 'next')}			
		`
		querySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);
	} else if (page === pages && page > 1) {
		pageButton = `
			${createPageButton(page, 'prev')}
			${createPageButton(page, 'next', 'hidden')}	
			`
			querySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);
	}
	
};
//displays type of button that is passed through and displays page number for next && || previous page
const createPageButton = (page, type, display) => `
	<button class="btn-inline results__btn--${type}" style = "visibility:${display}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <img class="search__icon"

            src="./images/${type === 'prev' ? 'left-' : 'right-'}arrows.svg">
        </img>   
    </button>
`;
//clears out blog-post, page numbers, and prev/next buttons before adding them again on new page display
const clearPageResultsBeforeLoadingNewPage = () => {
	querySelected.blogSection.innerHTML = '';
	querySelected.navBar.innerHTML = '';
	querySelected.pageButtonSection.innerHTML = '';
};

const calculatePages = (numPosts, postsPerPage) => {
	const pages = Math.ceil(numPosts/postsPerPage);
	return pages;
};

querySelected.pageButtonSection.addEventListener('click', e => {
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