import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function ManageUser() {
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/user/manage").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR ...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[res1])
    const deleteUser=(e)=>{
      e.preventDefault();
      const id=e.target.id;
      const url=`http://localhost:8080/user/manage/${id}`
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
            <div className="card-header"><h4> RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-dark"> 
            <thead>
                    <tr className="table-dark">
                    <th scope="col">User Id</th> 
                    <th scope="col">User Name</th>
                    <th scope="col">Role</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead> 
                <tbody>
           
           {res.map((x) => {
            return <tr ><td ><label key={x.userid}>{x.userid}</label></td>
            <td ><label key={x.user}>{x.name}</label></td>
            <td ><label key={x.userid}>{x.role}</label></td>
            <td ><Link  id={x.userid}  to={`/user/manage/${x.userid}`} className="btn btn-primary active">edit</Link></td>
            <td ><button  className="btn btn-primary active" id={x.userid} onClick={deleteUser}>delete</button></td>
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