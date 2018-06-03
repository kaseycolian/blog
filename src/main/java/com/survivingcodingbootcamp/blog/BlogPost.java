package com.survivingcodingbootcamp.blog;

import java.time.LocalDateTime;

public class BlogPost {

	private String content;
	private Author author;
	private String title;
	private LocalDateTime dateOfCreation;

	public BlogPost(String content, Author author, String title) {
		this.content = content;
		this.author = author;
		this.title = title;
		dateOfCreation = LocalDateTime.now();
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

	public LocalDateTime getCreationDate() {
		return dateOfCreation;
	}

}
