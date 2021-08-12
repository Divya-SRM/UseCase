package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Login;
import com.example.demo.Entity.Product;
import com.example.demo.Service.LoginManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	
	@Autowired
	 private LoginManager loginservice;
	 
    @PostMapping(value="/login")
    public ResponseEntity<Login> saveProduct(@RequestBody Login login)
    {    
       
		return new ResponseEntity<Login>(loginservice.saveCredentials(login),HttpStatus.OK);
    }
   

}
