package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.StockInward;
import com.example.demo.Entity.User;
import com.example.demo.Repo.StockInwardRepo;

@Service
public class StockInwardManager {
	
	@Autowired
	private StockInwardRepo stockinwardrepo;
	
public void getStockInward(StockInward stockin) {
		
	stockinwardrepo.save(stockin);
	}

	
	public List<StockInward> viewStockInward() {
		return stockinwardrepo.findAll();
		
	}

}
