import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function ManageProduct() {
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/products/manage").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERROR...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[res1])
    const deleteProduct=(e)=>{
      e.preventDefault();
      const id=e.target.id;
      const url=`http://localhost:8080/products/manage/${id}`
      axios.delete(url)
      .then(res1 => {
        console.log(res1);
        setResult1(res1.data);
        console.log(res1.data);
      })
  }
    return (
        <div>
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>PRODUCT RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-dark"> 
            <thead>
                    <tr className="table-dark">
                    <th scope="col">Product Id</th> 
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead> 
          <tbody>
           
               {res.map((x) => {
                return <tr ><td ><label key={x.id}>{x.productId}</label></td>
                <td ><label key={x.id}>{x.productName}</label></td>
                <td ><label key={x.id}>{x.quantity}</label></td>
                <td ><Link  id={x.id}  to={`/products/manage/${x.id}`} className="btn btn-primary active">edit</Link></td>
                <td ><button  className="btn btn-primary active" id={x.id} onClick={deleteProduct}>delete</button></td>
                </tr>
              })}
                
             
              </tbody> 
            </table>
            </div>
            </div>
            </div>
            </div> 
        </div>
    )}