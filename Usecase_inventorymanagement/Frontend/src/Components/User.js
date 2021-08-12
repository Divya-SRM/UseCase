import React, { useState } from 'react';
import Sidebar from './Sidebar'
import './Product.css'

export default function User() {
    return (
        <div>
            <Sidebar />
            <h1 style= {{marginLeft: "300px"}}>User</h1>
            <div className="container-sm " style= {{marginLeft: "300px"}}>
            <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add User</h5>
        <p class="card-text"></p>
        <a href="/user/add" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manage User</h5>
        <p class="card-text"></p>
        <a href="/user/manage" class="btn btn-primary">Manage</a>
      </div>
    </div>
  </div>
</div></div>
                </div>
           
    )
}