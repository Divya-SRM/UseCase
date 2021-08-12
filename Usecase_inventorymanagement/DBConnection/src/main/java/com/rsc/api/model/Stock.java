package com.rsc.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
	
	private String productname;
    private String supplierName;
    private String quantity;
    private String expiryDate;
    private String arrivalDate;
    private String stock;
    private String damagedStock;
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int stockId;
    public String getProductName() {
		return productname;
	}

	public void setProductName(String productName) {
		this.productname = productName;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}

	public String getDamagedStock() {
		return damagedStock;
	}

	public void setDamagedStock(String damagedStock) {
		this.damagedStock = damagedStock;
	}

	public int getStockId() {
		return stockId;
	}

	public void setStockId(int stockId) {
		this.stockId = stockId;
	}

	

}
