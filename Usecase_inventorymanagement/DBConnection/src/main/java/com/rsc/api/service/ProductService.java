package com.rsc.api.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.rsc.api.model.Products;
import com.rsc.api.repo.ProductRepository;



@Service
@Transactional
public class ProductService implements IProductService{
	
	@Autowired
	private ProductRepository prepo;
	
	public Products getdetails(Products product) {
		
		return prepo.save(product);
	}

	
	public List<Products> view() {
		System.out.println(prepo.findAll());
		return prepo.findAll();	
	}

	public Optional<Products> getUserById(int id) {
		
		return prepo.findById(id);
	}

	public void deleteUser(Integer id) {
		 prepo.deleteById(id);
		
	}
	
	

}
