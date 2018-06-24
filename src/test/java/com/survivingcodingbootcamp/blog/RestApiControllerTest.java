package com.survivingcodingbootcamp.blog;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.survivingcodingbootcamp.blog.RestApiController.BlogResourceNotFoundException;

public class RestApiControllerTest {
	private static final long AUTHOR_ID = 42L;
	private static final long BLOGPOST_ID = 110L;
	@InjectMocks
	private RestApiController underTest;
	@Mock
	private Author testAuthor;

	@Mock
	private AuthorRepository authorRepo;
	@Mock
	private BlogPostRepository blogPostRepo;
	@Mock
	private BlogPost testBlogPost;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void shouldReturnAllBlogPosts() {
		Iterable<BlogPost> retrievedBlogPosts = Arrays.asList(testBlogPost);
		when(blogPostRepo.findAll()).thenReturn(retrievedBlogPosts);
		Iterable<BlogPost> results = underTest.findAllBlogPosts();
		assertThat(results, contains(testBlogPost));

	}

	@Test
	public void shouldReturnAuthorObject() {
		when(authorRepo.findById(AUTHOR_ID)).thenReturn(Optional.of(testAuthor));
		Author retrievedAuthor = underTest.findAuthorById(AUTHOR_ID);
		assertThat(retrievedAuthor, is(testAuthor));
	}

	@Test(expected = BlogResourceNotFoundException.class)
	public void shouldThrowExceptionIfAuthorIsNotFound() {
		@SuppressWarnings("unused")
		Author nonExistentAuthor = underTest.findAuthorById(10101L);
	}

	@Test
	public void shouldReturnBlogPostObject() {
		when(blogPostRepo.findById(BLOGPOST_ID)).thenReturn(Optional.of(testBlogPost));
		BlogPost retrivedBlogPost = underTest.findBlogPostById(BLOGPOST_ID);
		assertThat(retrivedBlogPost, is(testBlogPost));
	}

	@Test(expected = BlogResourceNotFoundException.class)
	public void shouldThrowExceptionIfBlogPostIsNotFound() {
		@SuppressWarnings("unused")
		BlogPost nonExistentBlogPost = underTest.findBlogPostById(10101L);
	}

	@Test
	public void shouldRetrieveAListOfBlogPostsByTheAuthorId() {
		ArrayList<BlogPost> retrivedBlogPosts = new ArrayList<>();
		retrivedBlogPosts.add(testBlogPost);
		when(blogPostRepo.findAllByAuthorId(AUTHOR_ID)).thenReturn(retrivedBlogPosts);
		ArrayList<BlogPost> retrievedBlogPosts = underTest.findBlogPostsByAuthorId(AUTHOR_ID);
		assertThat(retrievedBlogPosts, contains(testBlogPost));
	}

	@Test(expected = BlogResourceNotFoundException.class)
	public void shouldThrowExceptionIfNoPostsAreFound() {
		@SuppressWarnings("unused")
		ArrayList<BlogPost> retrievedBlogPosts = underTest.findBlogPostsByAuthorId(10101L);
	}
}
