package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.StockInward;

@Repository
public interface StockInwardRepo extends JpaRepository<StockInward,Integer> {

}
