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
	private static final String TOPIC = "Test Topic";

	private void assertTitle(BlogPost blogPost, String title) {
		assertThat(blogPost.getTitle(), is(title));
	}

	BlogPost underTest = new BlogPost(CONTENT, AUTHOR, TITLE, TOPIC);

	@Test
	public void shouldHaveContentAuthorAndTitleAndStringTopic() {
		assertThat(underTest.getContent(), is(CONTENT));
		assertThat(underTest.getAuthor(), is(AUTHOR));
		assertTitle(underTest, TITLE);
		assertThat(underTest.getTopic(), is(TOPIC));

	}

	@Test
	public void shouldRecordTheDateOfCreation() {
		BlogPost underTest = new BlogPost(CONTENT, AUTHOR, TITLE, TOPIC);
		LocalDateTime testTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);
		String assertedTestTime = testTime.format(formatter);
		String underTestCreationTime = underTest.getCreationDate().format(formatter);
		assertThat(underTestCreationTime, is(assertedTestTime));
	}

	// @Test
	// public void shouldBeAbleToAddTopic() {
	// String topicName = "topicName";
	// underTest.addTopic(topicName);
	// Set<String> topicNames = underTest.getTopics();
	// assertThat(topicNames, contains(topicName));
	// }
	//
	// @Test
	// public void shouldBeAbleToAddTwoTopics() {
	// String topicName = "topicName";
	// String topic = "topic";
	// underTest.addTopic(topic);
	// underTest.addTopic(topicName);
	// Set<String> topicNames = underTest.getTopics();
	// assertThat(topicNames, containsInAnyOrder(topicName, topic));
	//
	// }

	// @Test
	// public void shouldOnlyHaveOneInstanceOfEachTopic() {
	// String topicName = "topicName";
	// underTest.addTopic(topicName);
	// underTest.addTopic(topicName);
	// Set<String> topicNames = underTest.getTopics();
	// assertThat(topicNames, contains(topicName));
	// }
}
