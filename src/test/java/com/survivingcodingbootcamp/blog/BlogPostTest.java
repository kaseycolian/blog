package com.survivingcodingbootcamp.blog;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class BlogPostTest {
	private static final String TITLE = "Test Title";
	private static final Author AUTHOR = new Author("Joe", "Blob");
	private static final String CONTENT = "Test Content";

	private void assertTitle(BlogPost blogPost, String title) {
		assertThat(blogPost.getTitle(), is(title));
	}

	@SuppressWarnings("unused")
	@Test
	public void shouldInstantiate() {
		BlogPost underTest;
	}

	BlogPost underTest = new BlogPost(CONTENT, AUTHOR, TITLE);

	@Test
	public void shouldHaveContentAuthorAndTitle() {
		assertThat(underTest.getContent(), is(CONTENT));
		assertThat(underTest.getAuthor(), is(AUTHOR));
		assertTitle(underTest, TITLE);

	}

}
