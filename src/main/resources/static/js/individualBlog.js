const querySelected = {
	header: document.querySelector('header')
}

class IndividualBlog {
	constructor(blogId){
		this.blogId = blogId;
	}

	getBlog() {
		fetch(`/blogPosts/{id}`)
		.then(result => {
			return result.json();
			console.log(blogPost);
		})
		.then(blogPost => {
			console.log(blogposts);
		})
		.catch(function(error){
			console.log(error);
		})
	};
	
	getBlogWithId() {
		querySelected.header.addEventListener('click', getBlog(id));
	};
}

const blogToDisplay = new IndividualBlog (5);

blogToDisplay.getBlogWithId();
