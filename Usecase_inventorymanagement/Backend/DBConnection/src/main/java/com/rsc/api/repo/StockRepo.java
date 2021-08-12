package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.Stock;

@Repository
public interface StockRepo extends JpaRepository<Stock,Integer> {

}
