package com.survivingcodingbootcamp.blog;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Author {

	private String authorFirstName;
	private String authorLastName;
	@OneToMany(mappedBy = "author")
	private Collection<BlogPost> blogPosts;

	public Collection<BlogPost> getBlogPosts() {
		return blogPosts;
	}

	@GeneratedValue
	@Id
	private Long id;

	public Author() {
	}

	public Author(String authorFirstName, String authorLastName) {
		this.authorFirstName = authorFirstName;
		this.authorLastName = authorLastName;
	}

	public String getAuthorFirstName() {
		return authorFirstName;
	}

	public String getAuthorLastName() {
		return authorLastName;
	}

	public Long getId() {
		return id;
	}
}