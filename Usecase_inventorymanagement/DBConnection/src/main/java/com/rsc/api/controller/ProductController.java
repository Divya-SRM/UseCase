package com.rsc.api.controller;

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

import com.rsc.api.model.Products;
import com.rsc.api.service.IProductService;
import com.rsc.api.service.ProductService;





@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/products")
public class ProductController extends BaseController{
	
	 @Autowired
	    private ProductService service;
	 
	 @PostMapping(value="/add")
	    public ResponseEntity<Products> saveProduct(@RequestBody Products product)
	    {    
	       System.out.println(product);
			return new ResponseEntity<Products>(service.getdetails(product),HttpStatus.OK);
	    }
	 @PutMapping(value="/add")
	    public ResponseEntity<Products> updateProduct(@RequestBody Products product)
	    {    
	       System.out.println(product);
			return new ResponseEntity<Products>(service.getdetails(product),HttpStatus.OK);
	    }
	    @GetMapping(value="/manage")
	    public ResponseEntity<List<Products>>viewProduct()
	    {    
			return new ResponseEntity<List<Products>>(service.view(),HttpStatus.OK);    
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
