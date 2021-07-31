package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.User;
import com.example.demo.Service.ProductManagerImpl;
import com.example.demo.Service.UserManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/user")
public class UserController {
	
    @Autowired
    private UserManager userService;

    @PostMapping(value="/add")
    public void saveUser(@RequestBody User user)
    {    
        userService.getuserdetails(user);  
        System.out.println(HttpStatus.OK);
    }
    @PutMapping(value="/manage/{id}")
    public void updateUser(@RequestBody User user)
    {    
        userService.getuserdetails(user);  
        System.out.println(HttpStatus.OK);
    }
    @GetMapping(value="/manage")
    public ResponseEntity<List<User>>viewProduct()
    {    
    
		return new ResponseEntity<List<User>>(userService.viewUser(),HttpStatus.OK);  
        
    }
    
    @GetMapping("/edit/{id}")
    public ResponseEntity<Optional> getUserById(@PathVariable int id)
    {
		return new ResponseEntity<Optional>(userService.getUserById(id),HttpStatus.OK);
	}
    @DeleteMapping(value="/manage/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) 
	{
		userService.deleteUser(id);
		return new ResponseEntity<String>("record deleted successfully", HttpStatus.OK);	
	}
    
    
	

}
