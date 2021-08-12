package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Login;
import com.example.demo.Entity.User;
import com.example.demo.Repo.LoginRepo;

@Service
public class LoginManager {
	
	@Autowired
	private LoginRepo lrepo;
	
	
public Login saveCredentials(Login login) {
		
	return lrepo.save(login);
	}

}
