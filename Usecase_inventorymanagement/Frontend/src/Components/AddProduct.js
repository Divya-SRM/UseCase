import React, { useState } from 'react';
import Sidebar from './Sidebar'
import './Product.css'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Product() {
  
  const validationSchema = Yup.object({
    
    productname: Yup.string().required("Product Name is mandatory"),
    suppliername: Yup.string().required("Supplier Name is mandatory")
  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
     
      productname: '',
      suppliername: '',
     
    },
    validationSchema,
    onSubmit(values) {
      axios.post("http://localhost:8080/products/add", values)
      .then(result =>
         {
           if(result.status==200){
            alert("Produt added successfully");
            console.log("=============Submitted");
            console.log(result.status);
           }

      }
      ).catch((err) => {
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
            <form id="product" onSubmit={handleSubmit} noValidate>
              <div class="form-row">
                

                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Product name</label>
                  <input type="text" class="form-control" id="validationDefault02" name="productname" value={values.productname} onChange={handleChange} />
                  {errors.productname ? errors.productname : null}
                </div>

                <div class="col-md-4 mb-3">
                  <label for="validationDefaultUsername">Supplier name</label>
                  <div class="input-group">
                    <input type="text" 
                    class="form-control" 
                    id="validationDefaultUsername" 
                    aria-describedby="inputGroupPrepend2" 
                    name="suppliername" 
                    value={values.suppliername} onChange={handleChange} />
                    {errors.suppliername ? errors.suppliername : null}
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit" >Add Product</button>

            </form>
          </div></div></div></div>

  )
}