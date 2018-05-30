package com.survivingcodingbootcamp.blog;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class AuthorTest {
	
	
	@Resource
	private AuthorRepository authorRepo;
	
	@Test
	public void shouldCreateAuthor() {
		Author author = new Author("Joe");
		author = authorRepo.save(author);
		long authorId = author.getId();
		
//		author = author.findOne(authorId);
		assertThat(author.getAuthorName(), is("Joe"));
		}
	
}
