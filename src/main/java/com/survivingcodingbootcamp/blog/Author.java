package com.survivingcodingbootcamp.blog;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Author {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String authorName;

	public Author(String authorName) {
		this.authorName = authorName;
	}
	
	
	
	public long getId() {
		// TODO Auto-generated method stub
		return 0;
	}


	public Object getAuthorName() {
		return authorName;
	}

	public Author findOne(long authorId) {
		// TODO Auto-generated method stub
		return null;
	}
}
