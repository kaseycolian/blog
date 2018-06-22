package com.survivingcodingbootcamp.blog;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

public class BlogPost {

	private String content;
	private Author author;
	private String title;
	private LocalDateTime dateOfCreation;
	private Set<String> topicNames = new HashSet<String>();

	public BlogPost(String content, Author author, String title) {
		this.content = content;
		this.author = author;
		this.title = title;
		dateOfCreation = LocalDateTime.now();
	}

	public BlogPost() {
	};

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

	public void addTopic(String topicName) {
		topicNames.add(topicName);
	}

	public Set<String> getTopics() {
		return topicNames;
	}

}
