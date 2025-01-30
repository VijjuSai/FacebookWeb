package com.micro;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

@Service
public class PostService {
	@Autowired
	PostRepo repo;
	
	public Post addPost(Post post) {
		return repo.save(post);
		
	}
	public List<Post> getAllPosts(){
		return repo.findAll();
	}
	

	
	public void  updatePost(int id, boolean approved,boolean rejected,LocalDate date,String postname, String postcontent,int uploadeduserid) {
		
		Post p1=Post.builder().id(id).approved(approved).date(date).postcontent(postcontent).postname(postname).rejected(rejected).uploadeduserid(uploadeduserid).build();
		repo.save(p1);
	}
	
	public Post getPostDetails(int id) {
		   Post sample = new Post();
			sample.setId(id);
			//sample.setPassword(password);
			ExampleMatcher exampleMatcher = ExampleMatcher.matching()
					.withMatcher("id", ExampleMatcher.GenericPropertyMatchers.exact())
					.withIgnorePaths("approved", "rejected", "uploadeduserid","date","postname","postcontent");
			
			Example<Post> example = Example.of(sample, exampleMatcher);
			Optional<Post> z=repo.findOne(example);
			return z.get();
	}
	
}
