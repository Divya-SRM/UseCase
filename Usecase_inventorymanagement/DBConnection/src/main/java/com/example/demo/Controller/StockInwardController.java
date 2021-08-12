package com.example.demo.Controller;

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
import com.example.demo.Entity.StockInward;
import com.example.demo.Service.StockInwardManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/stock")
public class StockInwardController {
	
	@Autowired
	private StockInwardManager stockservice;
	
	 @PostMapping(value="/inward")
	    public void saveUser(@RequestBody StockInward stockin)
	    {    
	        stockservice.getStockInward(stockin);  
	        System.out.println(HttpStatus.OK);
	    }
	    @GetMapping(value="/manage")
	    public ResponseEntity<List<StockInward>>viewProduct()
	    {    
	    
			return new ResponseEntity<List<StockInward>>(stockservice.viewStockInward(),HttpStatus.OK);  
	        
	    }
}
