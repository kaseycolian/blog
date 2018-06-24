package com.survivingcodingbootcamp.blog;

import java.util.Optional;

public class RestApiController {

	private AuthorRepository authorRepo;

	public Author findAuthorById(long id) {
		Optional<Author> retrivedAuthorQuery = authorRepo.findById(id);
		if (!retrivedAuthorQuery.isPresent()) {
			throw new BlogResourceNotFoundException();
		}
		return retrivedAuthorQuery.get();
	}

	public class BlogResourceNotFoundException extends RuntimeException {

		private static final long serialVersionUID = -6034445531634337189L;

	}
}
