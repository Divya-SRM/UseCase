package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.User;
import com.example.demo.Repo.UserRepo;

@Service
public class UserManager {
	
	@Autowired
	private UserRepo userrepo;
	

	public void getuserdetails(User user) {
		
		userrepo.save(user);
	}

	
	public List<User> viewUser() {
		return userrepo.findAll();
		
	}


	public Optional getUserById(int id) {
		
		return userrepo.findById(id);
	}


	public void deleteUser(Integer id) {
		userrepo.deleteById(id);
		
	}

}
