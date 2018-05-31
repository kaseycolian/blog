package com.survivingcodingbootcamp.blog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class AuthorTest {
	private Author underTest;
	
	private String FIRSTNAME = "Joe";
	private String LASTNAME = "Smuckatelli";

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
		assertEquals("Joe", check);
	}
	
	@Test
	public void shouldReturnAuthorLastName() {
		String check = underTest.getAuthorLastName();
		assertEquals(check, "Smuckatelli");
	}
	
}
