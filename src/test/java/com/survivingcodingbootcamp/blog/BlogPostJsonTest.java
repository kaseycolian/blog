package com.survivingcodingbootcamp.blog;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@JsonTest
public class BlogPostJsonTest {
	private static final String TITLE = "Test Title";
	private static final Author AUTHOR = new Author("Joe", "Blob");
	private static final String CONTENT = "Test Content";

	@Resource
	private JacksonTester<BlogPost> blogPostJson;

	// public BlogPost(String content, Author author, String title)
	@Test
	public void shouldSerialize() throws IOException {
		BlogPost blogPost = new BlogPost(CONTENT, AUTHOR, TITLE);
		JsonContent<BlogPost> content = blogPostJson.write(blogPost);

		assertThat(content).extractingJsonPathValue("@.title").isEqualTo(TITLE);
	}

	@Test
	public void shouldDeserialize() throws IOException {
		String jsonContent = "{\"title\": \"Test Title\" }";

		BlogPost parsed = blogPostJson.parseObject(jsonContent);

		assertThat(parsed.getTitle()).isEqualTo("Test Title");
	}
}