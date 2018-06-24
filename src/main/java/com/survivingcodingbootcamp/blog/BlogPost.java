package com.survivingcodingbootcamp.blog;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class BlogPost {
	@GeneratedValue
	@Id
	private Long id;
	@Lob
	private String content;
	@ManyToOne
	private Author author;
	private String title;
	private LocalDateTime dateOfCreation;
	// @OneToMany
	// private Collection<String> topicNames = new HashSet<String>();

	public BlogPost(String content, Author author, String title) {
		this.content = content;
		this.author = author;
		this.title = title;
		dateOfCreation = LocalDateTime.now();
	}

	public BlogPost() {
	}

	public Long getId() {
		return id;
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

	// public void addTopic(String topicName) {
	// topicNames.add(topicName);
	// }
	//
	// public Collection<String> getTopics() {
	// return topicNames;
	// }

}
