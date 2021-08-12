package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import com.example.demo.Entity.Product;
import com.example.demo.Repo.ProductRepo;

@Service
public class ProductManagerImpl implements ProductManager {
	@Autowired
	private ProductRepo prepo;

	@Override
	public Product getdetails(Product product) {
		
		return prepo.save(product);
	}

	@Override
	public List<Product> view() {
		System.out.println(prepo.findAll());
		return prepo.findAll();	
	}

	public Optional<Product> getUserById(int id) {
		
		return prepo.findById(id);
	}

	public void deleteUser(Integer id) {
		 prepo.deleteById(id);
		
	}

}
