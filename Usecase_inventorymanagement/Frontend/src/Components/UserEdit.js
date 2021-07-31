import React, { useState,useEffect,useHistory } from 'react';
import Sidebar from './Sidebar'
import './Product.css'
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";


export default function UserEdit() {
    
  const validationSchema = Yup.object({
    userid : Yup.number().required("userid is mandatory"),
    name : Yup.string().required("Name is mandatory"),
    role : Yup.string().required("Role is mandatory"),
    mobile:Yup.number().required("Mobile is mandatory"),
    email : Yup.string().required("email is mandatory"),
    
}) 

const { id } = useParams();
console.log(id);

const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/edit/${id}`);
    setValues(result.data);
    console.log(result.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser();
    
   
}, []);


const {setValues,handleSubmit,handleChange,values,errors} = useFormik({
    
  initialValues: {
    userid:'',
    name:'',
    role:'',
    mobile:'',
    email: ''
  },
  validationSchema,
  onSubmit(values) {
      const url="http://localhost:8080/user/manage/"+values.userid;
    axios.put(url,values).then(res=>res.data).then((data)=>{
          alert("user updated successfully");
          console.log("=============Submitted");
          console.log(data);
    }
    ).catch((err)=>{
            console.log("err")
        })
}

}) 
 
  
 

    return (
        <div>
            
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>ADD PRODUCTS</h4></div>
            <form onSubmit={handleSubmit} noValidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">User Id</label>
      <input type="text" class="form-control" id="validationDefault01" name="userid" value={values.userid} onChange={handleChange} readOnly/>
      {errors.userid ? errors.userid : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault02">User name</label>
      <input type="text" class="form-control" id="validationDefault02" name="name" value={values.name} onChange={handleChange} />
      {errors.name ? errors.name : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Role</label>
      <div class="input-group">
        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="role" value={values.role} onChange={handleChange} />
        {errors.role ? errors.role : null}
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Mobile</label>
      <input type="text" class="form-control" id="validationDefault03" name="mobile" value={values.mobile} onChange={handleChange} />
      {errors.mobile ? errors.mobile : null}
    </div>

    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Email Id</label>
      <input type="text" class="form-control" id="validationDefault04" name="email" value={values.email} onChange={handleChange}  />
      {errors.email ? errors.email : null}
    </div>

  </div>
  
  <button class="btn btn-primary"  type="submit" >Update User</button>
  
</form>
        </div></div></div></div>
        
)}