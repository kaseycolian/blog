/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/resources/static/js/mainViewCalls.js":
/*!*******************************************************!*\
  !*** ./src/main/resources/static/js/mainViewCalls.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/main/resources/static/js/test.js\");\n// import axios from 'axios';\r\n\r\n\r\nconst querySelected = {\r\n\tblogSection: document.querySelector('.blog-posts'),\r\n\tpageNumberNavigation: document.querySelector('.inline-pageNumbers'),\r\n\tnavBar: document.querySelector('nav'),\r\n\tpageList: document.querySelector('.pageList'),\r\n\tpageButtonSection: document.querySelector('.page-buttons'),\r\n\tinputtedPage: document.querySelector('.page__input')\r\n} \r\n\r\nconst getInputtedPage = () => querySelected.inputtedPage.value;\r\n\r\n// async addInputtedPageToDataGoTo() {\r\n// \tconst goToPage = await axios (getInputtedPage());\r\n// \tconsole.log(goToPage)\r\n// }\r\n\r\nconst clearInputtedValue = () => querySelected.inputtedPage.value = '';\r\n\r\nfunction getBlogs() {\r\n\tfetch(`/blogPosts`)\r\n\t.then(result => {\r\n\t\tif (!(result.ok)){\r\n\t\t\twindow.location =\"http://localhost:8080/notfound\";\r\n\t\t\tconsole.log('could not connect');\r\n\t\t}\r\n\t\treturn result.json();\r\n\t})\r\n\t.then(currentBlogs => {\t\t\r\n\t\tconsole.log(currentBlogs)\r\n\t\tfunction postBlogs() {\t\t\r\n\t\t\tconst blogPosts = currentBlogs._embedded.blogPosts.reverse();\r\n\t\t\tthis.blogResult = blogPosts;\r\n\t\t\trenderBlogPagination(blogPosts);\r\n\r\n\t\t\t//**Trying to return a promise to fetch the author's link. **Having troubles getting to ._links in Array\r\n\t\t\t// for (cur of blogPosts) {\r\n\t\t\t// console.log(cur._links.author.href);\r\n\t\t\t// }\r\n\t\t\t// blogPosts.forEach()\r\n\t\t\t// const link = blogPosts._links.author.href\r\n\t\t}\t\t\r\n\t\tpostBlogs();\t\r\n\r\n\t\t// return fetch()\r\n\t})\r\n\t// .then(currentLinks => {\r\n\t// \tconsole.log(currentLinks);\r\n\t// \tfor (cur of currentLinks){\r\n\t// \t\tconsole.log(currentLinks.embedded.blogPosts._links)\r\n\t// \t}\r\n\t// })\r\n\t.catch(function(error) {\t\t\t\t\t\r\n\t\t\tconsole.log(error);\r\n\t})\r\n};\r\ngetBlogs();\r\n\r\nconst renderAuthor = authorLink => {\r\n\tfetch(authorLink)\r\n\t.then(authorResult => {\r\n\t\tif (!(authorResult.ok)){\r\n\t\t// window.location =\"http://localhost:8080/notfound\";\r\n\t\tconsole.log('could not connect');\r\n\t\t}\r\n\t\treturn authorResult.json();\r\n\t})\r\n\t.then(authorLinkJson => { \t\t\r\n\t\t\tconst firstName = authorLinkJson.authorFirstName;\r\n\t\t\tundefined.authorFirstName = firstName;\r\n\t\t\tconsole.log(authorFirstName);\r\n\t\t\tundefined.authorLastName = authorLinkJson.authorLastName;\r\n\t\t\tconsole.log(authorLastName);\r\n\t\t\t// getAuthorsNames();\r\n\t})\r\n\t.catch(function(error) {\t\t\t\t\t\r\n\t\tconsole.log(error);\r\n\t})\r\n};\r\n\r\n// const getAuthorsNames = (firstName, lastName) => {\r\n// \tfirstName = this.authorFirstName;\r\n// \tconsole.log(authorFirstName);\r\n// \tlastName = this.authorLastName;\r\n// \tconsole.log(authorLastName);\r\n// }\r\n\r\n\r\n//takes in this.blogResult from fetch for all blogPosts returned from fetch\r\n//has variables to calculate pages, number of blogs per page and total posts\r\n//calculates posts per page\r\n//calculates current Page\r\nconst renderBlogPagination = (blogPosts, page = 1, postsPerPage = 3) => {\r\n\t// console.log(blogPosts);\r\n\tconst start = (page-1) * postsPerPage;\r\n\tconst end = page * postsPerPage;\r\n\r\n\t//each blogPost gets passed in as argument to renderBlogPosts()\r\n\tblogPosts.slice(start, end).forEach(renderBlogPosts)\r\n\r\n\trenderPageButtons(page, blogPosts.length, postsPerPage);\r\n\trenderPageList(page, blogPosts.length, postsPerPage);\r\n\t// renderLimitedPageNumbers(blogPosts.length, postsPerPage);\r\n};\r\n\r\nconst renderBlogPosts = (blogPost, authorNames) => {\r\n\tconsole.log(blogPost);\r\n\tconst T = 'T';\r\n\t//only need to reference edidedDate & editedTime in markup from its variable in splitString();\r\n\tconst dateAndTime = renderDateAndTime(blogPost.creationDate, T);\r\n\tconst linkSeparator = '/'\r\n\tgetIndividualBlogId(blogPost._links.blogPost.href, linkSeparator);\r\n\r\n\tconst spaceSeparator = ' ';\r\n\trenderBlogContentDisplay(blogPost.content, spaceSeparator);\r\n\r\n\trenderAuthor(blogPost._links.author.href);\r\n\t// console.log(this.authorFirstName)\r\n\r\n\tconst markup =  `\r\n\t\t<article class = \"blog__entry\" id = \"entry__one\" dataset = \"post_1\">\r\n\t\t\t<div class = \"entry__title\">\r\n\t\t\t\t<div class = \"entry__link\">\r\n\t\t\t\t\t<a href = /blogPost.html/${blogId} target='_blank' class = \"title__section\" ><h2>${blogPost.title}</h2></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"entry__info\">\r\n\t\t\t\t<h4>${editedDate} ~ ${editedTime} ~ ${blogId} ~&nbsp</h4>\r\n\t\t\t\t<h4 class = \"entry__topic\">${blogPost.topic}</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"entry__info__mobile\">\r\n\t\t\t\t<h4>${editedDate} ~ ${editedTime}</h4>\r\n\t\t\t\t<h4>${blogPost._links.author.href}</h4>\r\n\t\t\t\t<h4 class = \"entry__topic\">${blogPost.topic}</h4>\r\n\t\t\t</div>\r\n\t\t\t<p class = \"entry__content\">${blogContent}</p>\r\n\t\t\t<div class = article__separator>\r\n\t\t\t</div>\r\n\t\t</article>\r\n\t`;\t\t\t\t\r\n\tquerySelected.blogSection.insertAdjacentHTML('beforeend', markup);\r\n};\r\n\r\nconst renderPageList = (page, numPosts, postsPerPage) => {\r\n\tlet pageCount = 1;\r\n\tconst pages = calculatePages(numPosts, postsPerPage);\r\n\tconst allPages = [];\r\n\t//returns count of all pages in an Array of allPages\r\n\tfor (let i = 0; i < pages; i++) {\r\n\t\t\tallPages[i] = pageCount;\r\n\t\t\tpageCount++;\r\n\t}\r\n\r\n\tconst lastPage = allPages.length; //returns 7\r\n\tconst penultimatePage = allPages[allPages.length-2]; //returns 6\r\n\tconst thirdFromLastPage = allPages[allPages.length-3]; //returns 5\r\n\tconst firstPage = allPages.slice(0,1); //returns 1\r\n\tconst first4Pages = allPages.slice(0, 6); //returns 1, 2, 3, 4, 5\r\n\t\r\n\tconst renderFirstPageDisplay = () => {\r\n\t\tconst firstPageToDisplay = \t `\r\n\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${firstPage}>[${firstPage}...]</div>\r\n\t\t`;\t\t\r\n\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', firstPageToDisplay);\r\n\t};\r\n\tconst renderLastPageDisplay = () => {\r\n\t\tconst lastPageDisplay = `\r\n\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${lastPage}>[...${lastPage}]</div>\r\n\t\t`;\r\n\t\tquerySelected.navBar.insertAdjacentHTML('beforeend', lastPageDisplay);\r\n\t};\r\n\tconst renderPageListLoop = () => {\r\n\t\tif (cur === page ) {\r\n\t\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${cur}>${cur}</div>\r\n\t\t\t\t`\r\n\t\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\t} else {\r\n\t\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${cur}>${cur}</div>\r\n\t\t\t\t`\r\n\t\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\t}\r\n\t};\r\n\r\n\tif (allPages.length <= 5) { \r\n\t\tfor (cur of allPages.reverse()) {\r\n\t\t\trenderPageListLoop();\r\n\t\t}\r\n\t} else if (allPages.length > 4 ) {\r\n\t\tif (page < 4 && page != penultimatePage && page != lastPage) {\r\n\t\t\tfor (cur of first4Pages.reverse()) {\r\n\t\t\trenderPageListLoop();\r\n\t\t\t}\r\n\t\t\trenderLastPageDisplay();\r\n\t\t} else if (page >= 4 && page<allPages[allPages.length-4]) {\r\n\t\t\tconst mobileView = window.matchMedia('(max-width: 320px)');\r\n\r\n\t\t\t//if pages is greater than 4 & less than 4 from end\r\n\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-3}>${page-3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+1}>${page+1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+2}>${page+2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+3}>${page+3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+4}>${page+4}</div>\r\n\t\t\t\t`;\r\n\r\n\t\t\tconst mobilePageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+1}>${page+1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+2}>${page+2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+3}>${page+3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+4}>${page+4}</div>\r\n\t\t\t\t`;\r\n\r\n\t\t\tif (mobileView.matches && page != 4) {\r\n\t\t\t\tconsole.log(`first mobile`);\r\n\t\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', mobilePageNumberDisplay);\r\n\t\t\t\trenderFirstPageDisplay();\r\n\t\t\t\trenderLastPageDisplay();\r\n\r\n\t\t\t} else if (mobileView.matches) {\r\n\t\t\t\tconsole.log(`2nd mobile`);\r\n\t\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', mobilePageNumberDisplay);\r\n\t\t\t\trenderLastPageDisplay();\r\n\r\n\t\t\t} else if (page != 4) {\r\n\t\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\t\trenderFirstPageDisplay();\r\n\t\t\t\trenderLastPageDisplay();\r\n\t\t\t} \r\n\t\t\t else  {\r\n\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\trenderLastPageDisplay();\r\n\t\t\t}\r\n\t\t} else if (page === allPages[allPages.length-4]) {\r\n\t\t\t//when pages is 4th to last\r\n\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-3}>${page-3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+1}>${page+1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+2}>${page+2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+3}>${page+3}</div>\r\n\t\t\t\t`\r\n\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\trenderFirstPageDisplay();\r\n\t\t\trenderLastPageDisplay();\r\n\t\t} else if (page === allPages[allPages.length-3]) {\r\n\t\t\t//when page is 3rd to last page\r\n\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-3}>${page-3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+1}>${page+1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+2}>${page+2}</div>\r\n\t\t\t\t`\r\n\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\trenderFirstPageDisplay();\r\n\t\t\trenderLastPageDisplay();\r\n\t\t} else if ( page === penultimatePage) {\r\n\t\t\t//when page is next to last page\r\n\t\t\tconst pageNumberDisplay = `\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-3}>${page-3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page+1}>${page+1}</div>\r\n\t\t\t\t`\r\n\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\trenderFirstPageDisplay();\r\n\t\t\trenderLastPageDisplay();\r\n\t\t} else if ( page === lastPage) {\r\n\t\t\tconst pageNumberDisplay = `\t\t\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-4}>${page-4}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-3}>${page-3}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-2}>${page-2}</div>\r\n\t\t\t\t<div class = \"page__numbers\" class = \"inactive\" data-goto=${page-1}>${page-1}</div>\r\n\t\t\t\t<div class = \"page__numbers\" id=\"active__page\" data-goto=${page}>${page}</div>\r\n\t\t\t\t`\r\n\t\t\tquerySelected.navBar.insertAdjacentHTML('afterbegin', pageNumberDisplay);\r\n\t\t\trenderFirstPageDisplay();\r\n\t\t\trenderLastPageDisplay();\r\n\t\t}\r\n\t}\r\n}\r\n\r\n//gets blogID from each blog's link (last index in Array made from splitting URL string) - called in renderBlogPost()\r\nconst getIndividualBlogId = (stringToSplit, separator) => {\r\n\tconst arrayOfLinkStrings = stringToSplit.split(separator);\r\n\tundefined.blogId = arrayOfLinkStrings[arrayOfLinkStrings.length - 1];\r\n\tconsole.log(blogId);\r\n}\r\n\r\n//limits amount of words displayed in blog content & adds '...' to posts that are over set limit - called in renderBlogPost()\r\nconst renderBlogContentDisplay = (stringToSplit, separator, allowedWordCount = 200) => {\r\n\tconst arrayOfBlogContentWords = stringToSplit.split(separator);\r\n\tif (arrayOfBlogContentWords.length > allowedWordCount) {\t\t\r\n\t\tconst contentArray = arrayOfBlogContentWords.slice(0, allowedWordCount);\r\n\t\tconst moreToComeMarkUp = `\r\n\t\t\t<a href = \"/blogPosts/${blogId}\" target='_blank'><strong style=\"color: yellow; font-size: 2rem\">...</strong></a>\r\n\t\t`;\r\n\t\tcontentArray.push(moreToComeMarkUp);\r\n\t\tcontentArray[contentArray.length-1];\r\n\t\tundefined.blogContent = contentArray.join(\" \");\r\n\t} else {\r\n\t\tundefined.blogContent = stringToSplit;\r\n\t}\r\n}\r\n\r\n//creates formatting for proper date & time of creation. called in renderBlogPost()\r\nconst renderDateAndTime = (stringToSplit, separator) => {\r\n\t\t const arrayOfStrings = stringToSplit.split(separator);\r\n\r\n\t\t //this.date & this.time defines each markup when called in renderBlogPosts as this specific instance of date & time - removed const & added to edited date & time\r\n\t\t const date = arrayOfStrings[0];\r\n\t\t const timeUnedited = arrayOfStrings[1];\r\n\t\t //removes the milliseconds\r\n\t\t undefined.editedTime = timeUnedited.substring(0, timeUnedited.length-4);\r\n\r\n\t\t //moves year to end of date by selecting substring elements and declaring in template literal\r\n\t\t const monthAndDay = date.substring(5, date.length);\r\n\t\t const year = date.substring(0, 4);\r\n\t\t undefined.editedDate = `${monthAndDay}-${year}`;\r\n}\r\n//calculates pages with passed in arguments\r\nconst renderPageButtons = (page, numPosts, postsPerPage) => {\r\n\tconst pages = calculatePages(numPosts, postsPerPage);\r\n\tlet pageButton;\r\n\r\n\tif (page === 1 && pages > 1) {\r\n\t\tpageButton = `\r\n\t\t\t${createPageButton(page, 'prev', 'hidden')}\t\t\r\n\t\t\t${createPageButton(page, 'next')}\r\n\t\t\t`\r\n\t\t\t// document.querySelector(\".btn-inline.results__btn--prev\").style.display = none;\r\n\t\t\tquerySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);\r\n\t} \r\n\telse if (page < pages) {\r\n\t\tpageButton = `\r\n\t\t\t${createPageButton(page, 'prev')}\r\n\t\t\t${createPageButton(page, 'next')}\t\t\t\r\n\t\t`\r\n\t\tquerySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);\r\n\t} else if (page === pages && page > 1) {\r\n\t\tpageButton = `\r\n\t\t\t${createPageButton(page, 'prev')}\r\n\t\t\t${createPageButton(page, 'next', 'hidden')}\t\r\n\t\t\t`\r\n\t\t\tquerySelected.pageButtonSection.insertAdjacentHTML('afterbegin', pageButton);\r\n\t}\t\r\n};\r\n\r\n//displays type of button that is passed through and displays page number for next && || previous page\r\nconst createPageButton = (page, type, display) => `\r\n\t<button class=\"btn-inline results__btn--${type}\" style = \"visibility:${display}\" data-goto=${type === 'prev' ? page - 1 : page + 1}>\r\n        <img class=\"search__icon\"\r\n\r\n            src=\"./images/${type === 'prev' ? 'left-' : 'right-'}arrows.svg\">\r\n        </img>   \r\n    </button>\r\n`;\r\n//clears out blog-post, page numbers, and prev/next buttons before adding them again on new page display\r\nconst clearPageResultsBeforeLoadingNewPage = () => {\r\n\tquerySelected.blogSection.innerHTML = '';\r\n\tquerySelected.navBar.innerHTML = '';\r\n\tquerySelected.pageButtonSection.innerHTML = '';\r\n};\r\n\r\nconst calculatePages = (numPosts, postsPerPage) => {\r\n\tconst pages = Math.ceil(numPosts/postsPerPage);\r\n\treturn pages;\r\n};\r\n\r\nquerySelected.pageButtonSection.addEventListener('click', e => {\r\n\tconst pageButton = e.target.closest('.btn-inline');\r\n\tif (pageButton) {\r\n\t\tconst goToPage = parseInt(pageButton.dataset.goto, 10);\r\n\t\tclearPageResultsBeforeLoadingNewPage();\r\n\t\trenderBlogPagination(blogResult, goToPage);\r\n\t}\r\n});\r\n\r\nquerySelected.navBar.addEventListener('click', e => {\r\n\tconst pageList = e.target.closest('.page__numbers');\r\n\tif (pageList) {\r\n\t\tconst goToPage = parseInt(pageList.dataset.goto, 10);\r\n\t\tclearPageResultsBeforeLoadingNewPage();\r\n\t\trenderBlogPagination(blogResult, goToPage);\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./src/main/resources/static/js/mainViewCalls.js?");

/***/ }),

/***/ "./src/main/resources/static/js/test.js":
/*!**********************************************!*\
  !*** ./src/main/resources/static/js/test.js ***!
  \**********************************************/
/*! exports provided: number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"number\", function() { return number; });\nconst number = 23;\n\n//# sourceURL=webpack:///./src/main/resources/static/js/test.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/main/resources/static/js/mainViewCalls.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main/resources/static/js/mainViewCalls.js */\"./src/main/resources/static/js/mainViewCalls.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main/resources/static/js/mainViewCalls.js?");

/***/ })

/******/ });