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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Product;
import com.example.demo.Service.ProductManagerImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/products")
public class MyController extends BaseController
{
    @Autowired
    private ProductManagerImpl service;

    @PostMapping(value="/add")
    public void saveProduct(@RequestBody Product product)
    {    
        service.getdetails(product);  
        System.out.println(HttpStatus.OK);
    }
    @GetMapping(value="/manage")
    public ResponseEntity<List<Product>>viewProduct()
    {    
		return new ResponseEntity<List<Product>>(service.view(),HttpStatus.OK);    
    }
    
    @GetMapping("/edit/{id}")
    public ResponseEntity<Optional> getUserById(@PathVariable int id)
    {
		return new ResponseEntity<Optional>(service.getUserById(id),HttpStatus.OK);
	}
    @DeleteMapping(value="/manage/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) 
	{
		service.deleteUser(id);
		return new ResponseEntity<String>("record deleted successfully", HttpStatus.OK);	
	}
    
}
