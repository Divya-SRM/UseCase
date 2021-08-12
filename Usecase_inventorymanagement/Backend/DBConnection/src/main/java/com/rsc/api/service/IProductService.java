package com.rsc.api.service;

import java.util.List;
import java.util.Optional;

import com.rsc.api.model.Products;

public interface IProductService {
	public Products getdetails(Products product);
	public List<Products> view();
	public Optional<Products> getUserById(int id);
	public void deleteUser(Integer id);

}
