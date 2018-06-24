package com.survivingcodingbootcamp.blog;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.survivingcodingbootcamp.blog.RestApiController.BlogResourceNotFoundException;

public class RestApiControllerTest {
	@InjectMocks
	private RestApiController underTest;
	@Mock
	private Author testAuthor;

	@Mock
	private AuthorRepository authorRepo;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void shouldReturnAuthorObject() {
		when(authorRepo.findById(42L)).thenReturn(Optional.of(testAuthor));
		Author retrievedAuthor = underTest.findAuthorById(42L);
		assertThat(retrievedAuthor, is(testAuthor));
	}

	@Test(expected = BlogResourceNotFoundException.class)
	public void shouldThrowExceptionIfAuthorIsNotFound() {
		@SuppressWarnings("unused")
		Author nonExistentAuthor = underTest.findAuthorById(10101L);

	}

}
