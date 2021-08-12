package com.rsc.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rsc.api.model.UserDetail;
import com.rsc.api.repo.UserDetailRepo;


@Service
public class UserDetailService {
	@Autowired
	private UserDetailRepo userrepo;
	

	public void getuserdetails(UserDetail user) {
		
		userrepo.save(user);
	}

	
	public List<UserDetail> viewUser() {
		return userrepo.findAll();
		
	}


	public Optional getUserById(int id) {
		
		return userrepo.findById(id);
	}


	public void deleteUser(Integer id) {
		userrepo.deleteById(id);
		
	}

}
