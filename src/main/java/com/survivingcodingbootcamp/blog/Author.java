package com.survivingcodingbootcamp.blog;

public class Author {
	
//	@Id
//	@GeneratedValue
//	private long id;
	
	private String authorName;

	public Author(String authorName) {
		this.authorName = authorName;
	}
	
	
//	public long getId() {
//		return id;
//	}


	public Object getAuthorName() {
		return authorName;
	}

	public Author findOne(long authorId) {
		// TODO Auto-generated method stub
		return null;
	}
}
