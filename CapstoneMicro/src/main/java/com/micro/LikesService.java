package com.micro;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

@Service
public class LikesService {
	
	@Autowired 
	LikesRepo repo;
	
	public Likes getTotal(Likes likes) {
		return repo.save(likes);
	
	}
	
	public List<Likes> getAllHistory(){
		return repo.findAll();
		
	}
}
