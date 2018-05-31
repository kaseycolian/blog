package com.survivingcodingbootcamp.blog;

import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class AuthorTest {
	private Author underTest;

	@Before
	public void setup() {
		underTest = new Author();
	}
	
	@Test
	public void shouldConstructAuthor() {
		assertNotNull(underTest);
	}
	
}
