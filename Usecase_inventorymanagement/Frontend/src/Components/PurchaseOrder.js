import React, { useState } from 'react';
import Sidebar from './Sidebar'
import './Product.css'

export default function PurchaseOrder() {
    return (
        <div>
            <Sidebar />
            <h1>Products</h1>
            <div className="container-sm ">
            <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add Product</h5>
        <p class="card-text"></p>
        <a href="/products/add" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manage Product</h5>
        <p class="card-text"></p>
        <a href="/purchaserorder/manage" class="btn btn-primary">Manage</a>
      </div>
    </div>
  </div>
</div></div>
                </div>
           
    )
}