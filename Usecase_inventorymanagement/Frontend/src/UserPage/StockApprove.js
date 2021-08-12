import React, { useState,useEffect } from 'react';


export default function StockApprove() {
    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/stock/manage").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    return (
        <div>
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>STOCK RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-dark"> 
            <thead>
                    <tr className="table-dark">
                    <th scope="col">Stock Id</th> 
                    <th scope="col">Stock </th>
                    <th scope="col">Arrival Date</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead> 
          <tbody>
           
               {res.map((x) => {
                return <tr ><td ><label key={x.id}>{x.stockId}</label></td>
                 <td ><label key={x.id}>{x.stock}</label></td>
                <td ><label key={x.id}>{x.arrivalDate}</label></td>
                <td ><label key={x.id}>{x.expiryDate}</label></td>
                <td ><label key={x.id}>{x.quantity}</label></td>
                <td ><a href="/#" class="btn btn-primary">Approve</a></td>
                <td ><button  className="btn btn-primary active" >delete</button></td>
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