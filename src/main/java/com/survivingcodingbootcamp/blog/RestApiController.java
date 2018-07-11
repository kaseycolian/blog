package com.survivingcodingbootcamp.blog;

import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestApiController {
	@Resource
	private AuthorRepository authorRepo;
	@Resource
	private BlogPostRepository blogPostRepo;

	@RequestMapping("/blogPosts")
	public Iterable<BlogPost> findAllBlogPosts() {
		return blogPostRepo.findAll();
	}

	@RequestMapping("/author/{id}")
	public Author findAuthorById(@PathVariable(name = "id") Long id) {
		Optional<Author> retrivedAuthorQuery = authorRepo.findById(id);
		if (!retrivedAuthorQuery.isPresent()) {
			throw new BlogResourceNotFoundException();
		}
		return retrivedAuthorQuery.get();
	}

	@RequestMapping("/blogPosts.html/{id}")
	public BlogPost findBlogPostById(@PathVariable(name = "id") Long blogPostId) {
		Optional<BlogPost> retrievedBlogPostQuery = blogPostRepo.findById(blogPostId);
		if (!retrievedBlogPostQuery.isPresent()) {
			throw new BlogResourceNotFoundException();
		}
		return retrievedBlogPostQuery.get();
	}

	@RequestMapping("/blogPosts/author/{id}")
	public ArrayList<BlogPost> findBlogPostsByAuthorId(@PathVariable(name = "id") Long authorId) {
		ArrayList<BlogPost> retrievedBlogPostsQuery = blogPostRepo.findAllByAuthorId(authorId);
		if (retrievedBlogPostsQuery.isEmpty()) {
			throw new BlogResourceNotFoundException();
		}
		return retrievedBlogPostsQuery;
	}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class BlogResourceNotFoundException extends RuntimeException {

		private static final long serialVersionUID = -6034445531634337189L;

	}

}
