package com.survivingcodingbootcamp.blog;

import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {
	@Resource
	private AuthorRepository authorRepo;
	@Resource
	private BlogPostRepository blogPostRepo;

	@RequestMapping("/api/blogPosts")
	public Iterable<BlogPost> findAllBlogPosts() {
		return blogPostRepo.findAll();
	}

	public Author findAuthorById(long id) {
		Optional<Author> retrivedAuthorQuery = authorRepo.findById(id);
		if (!retrivedAuthorQuery.isPresent()) {
			throw new BlogResourceNotFoundException();
		}
		return retrivedAuthorQuery.get();
	}

	public BlogPost findBlogPostById(long blogPostId) {
		Optional<BlogPost> retrievedBlogPostQuery = blogPostRepo.findById(blogPostId);
		if (!retrievedBlogPostQuery.isPresent()) {
			throw new BlogResourceNotFoundException();
		}
		return retrievedBlogPostQuery.get();
	}

	public ArrayList<BlogPost> findBlogPostsByAuthorId(long authorId) {
		ArrayList<BlogPost> retrievedBlogPostsQuery = blogPostRepo.findAllByAuthorId(authorId);
		if (retrievedBlogPostsQuery.isEmpty()) {
			throw new BlogResourceNotFoundException();
		}
		return retrievedBlogPostsQuery;
	}

	public class BlogResourceNotFoundException extends RuntimeException {

		private static final long serialVersionUID = -6034445531634337189L;

	}

}
