package com.survivingcodingbootcamp.blog;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;

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

	@Test
	public void shouldRecordTheDateOfCreation() {
		BlogPost underTest = new BlogPost(CONTENT, AUTHOR, TITLE);
		LocalDateTime testTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);
		String assertedTestTime = testTime.format(formatter);
		String underTestCreationTime = underTest.getCreationDate().format(formatter);
		assertThat(underTestCreationTime, is(assertedTestTime));
	}
}
