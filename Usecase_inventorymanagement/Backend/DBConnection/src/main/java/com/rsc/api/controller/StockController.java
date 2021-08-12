package com.rsc.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rsc.api.model.Stock;
import com.rsc.api.repo.StockRepo;
import com.rsc.api.service.StockService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/stock")
public class StockController {
	
	@Autowired
	private StockService stockservice;
	
	 @PostMapping(value="/inward")
	    public void saveUser(@RequestBody Stock stockin)
	    {    
	        stockservice.getStockInward(stockin);  
	        System.out.println(HttpStatus.OK);
	    }
	    @GetMapping(value="/manage")
	    public ResponseEntity<List<Stock>>viewProduct()
	    {    
	    
			return new ResponseEntity<List<Stock>>(stockservice.viewStockInward(),HttpStatus.OK);  
	        
	    }


}
