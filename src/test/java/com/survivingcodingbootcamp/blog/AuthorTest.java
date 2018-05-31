package com.survivingcodingbootcamp.blog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class AuthorTest {
	private Author underTest;
	
	private String FIRSTNAME = "Joe";

	@Before
	public void setup() {
		underTest = new Author(FIRSTNAME);
	}
	
	@Test
	public void shouldConstructAuthor() {
		assertNotNull(underTest);
	}
	
	@Test
	public void shouldReturnAuthorFirstName() {
		String check = underTest.getAuthorFirstName();
		assertEquals("Joe", check);
	}
	
	
}
