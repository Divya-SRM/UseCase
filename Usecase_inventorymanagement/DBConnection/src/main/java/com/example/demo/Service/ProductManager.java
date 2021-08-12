package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Product;

public interface ProductManager {

	public Product getdetails(Product product);
	public List<Product> view();
}
