package com.survivingcodingbootcamp.blog;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@WebMvcTest

public class BlogPostMvcTest {

	@Resource
	MockMvc mvc;
	@MockBean
	AuthorRepository authorRepo;
	@MockBean
	BlogPostRepository blogPostRepo;
	private static final Author TEST_AUTHOR = new Author("Joe", "Smith");
	private static final BlogPost TEST_BLOG_POST = new BlogPost("Blah Blah Blah Blah", TEST_AUTHOR, "Blah Times");

	@Test
	public void shouldRetrieveBlogPosts() throws Exception {
		mvc.perform(get("/api/blogPosts")).andExpect(status().isOk());
	}

	@Test
	public void shouldRetrieveAuthor() throws Exception {
		when(authorRepo.findById(42L)).thenReturn(Optional.of(TEST_AUTHOR));
		mvc.perform(get("/api/author/42")).andExpect(status().isOk());
	}

	@Test
	public void shouldRetrieveBlogPost() throws Exception {
		when(blogPostRepo.findById(110L)).thenReturn(Optional.ofNullable(TEST_BLOG_POST));
		mvc.perform(get("/api/blogPosts/110")).andExpect(status().isOk());
	}

	@Test
	public void shouldRetrieveBlogPostsByAuthor() throws Exception {
		ArrayList<BlogPost> retrivedBlogPosts = new ArrayList<>();
		retrivedBlogPosts.add(TEST_BLOG_POST);
		when(blogPostRepo.findAllByAuthorId(42L)).thenReturn(retrivedBlogPosts);
		mvc.perform(get("/api/blogPosts/author/42")).andExpect(status().isOk());
	}

	@Test
	public void shoudReturn404IfAuthorNotFound() throws Exception {
		mvc.perform(get("/api/author/132")).andExpect(status().isNotFound());

	}

	@Test
	public void shouldReturn404IfBlogPostNotFound() throws Exception {
		mvc.perform(get("/api/blogPost/100")).andExpect(status().isNotFound());
	}

}
