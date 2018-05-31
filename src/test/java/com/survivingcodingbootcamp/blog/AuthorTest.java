package com.survivingcodingbootcamp.blog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class AuthorTest {
	
	private Author underTest;
	
	private String FIRSTNAME = "authorFirstName";
	private String LASTNAME = "authorLastName";

	@Before
	public void setup() {
		underTest = new Author(FIRSTNAME, LASTNAME);
	}
	
	@Test
	public void shouldConstructAuthor() {
		assertNotNull(underTest);
	}
	
	@Test
	public void shouldReturnAuthorFirstName() {
		String check = underTest.getAuthorFirstName();
		assertEquals("authorFirstName", check);
	}
	
	@Test
	public void shouldReturnAuthorLastName() {
		String check = underTest.getAuthorLastName();
		assertEquals(check, "authorLastName");
	}
}