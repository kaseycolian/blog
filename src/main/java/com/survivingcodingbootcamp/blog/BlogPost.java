package com.survivingcodingbootcamp.blog;

public class BlogPost {

	private String content;
	private Author author;
	private String title;

	public BlogPost(String content, Author author, String title) {
		this.content = content;
		this.author = author;
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public Author getAuthor() {
		return author;
	}

	public String getTitle() {
		return title;
	}

}
