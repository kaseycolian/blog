package com.survivingcodingbootcamp.blog;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

public interface BlogPostRepository extends CrudRepository<BlogPost, Long> {

	ArrayList<BlogPost> findAllByAuthorId(long authorId);

}