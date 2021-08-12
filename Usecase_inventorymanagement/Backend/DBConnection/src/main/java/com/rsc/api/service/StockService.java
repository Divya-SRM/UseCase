package com.rsc.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rsc.api.model.Stock;
import com.rsc.api.repo.StockRepo;

@Service
public class StockService {

	@Autowired
	private StockRepo stockinwardrepo;
	
public void getStockInward(Stock stockin) {
		
	stockinwardrepo.save(stockin);
	}

	
	public List<Stock> viewStockInward() {
		return stockinwardrepo.findAll();
		
	}
}
