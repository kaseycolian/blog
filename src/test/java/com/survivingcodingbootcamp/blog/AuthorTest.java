package com.survivingcodingbootcamp.blog;

import javax.annotation.Resource;

import org.junit.Test;

public class AuthorTest {
	
	@Resource
	private AuthorRepository authorRepo;
	
	@Test
	public void shouldCreateAuthor() {
		Author author = new Author();
		author = authorRepo.save(author);
		long authorId = author.getId();
		
		author = author.findOne(authorId);
		
		
	}
	
}
