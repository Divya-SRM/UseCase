import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';



export default function StockInward() {
    const[productId,setProductId]=useState([]);
  const validationSchema = Yup.object({
    productName: Yup.string().required("ProductName is mandatory"),
    supplierName: Yup.string().required("Supplier is mandatory"),
    damagedStock: Yup.string().required("DamageStock is mandatory"),
    quantity: Yup.number().required("Qunantity is mandatory"),
    expiryDate: Yup.string().required("expiryDate is mandatory"),
    arrivalDate: Yup.string().required("arrivalDate is mandatory"),
    stock: Yup.string().required("Stok Name is mandatory")
  })
  useEffect(() => {
    axios.get("http://localhost:8080/products/manage").then(res=>{
  console.log(res.data);
  setProductId(res.data);
}).catch(e=>{
  console.error("error in city values");
  console.error(e);
}).finally(()=>{
  console.log("I am in finally");
})
}, []);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      productname: '',
      supplierName: '',
      quantity: '',
      expiryDate: '',
      arrivalDate: '',
      stock:'',
      damagedStock:'',
      stockId:''
    },
    validationSchema,
    onSubmit(values) {
      axios.post("http://localhost:8080/stock/inward", values).then(res => res.data).then((data) => {
        alert("User Onboarded successfully");
        console.log("=============Submitted");
        console.log(data);
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
            <div className="card-header"><h4>ADD STOCK</h4></div>
            <form onSubmit={handleSubmit} noValidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01">Product Name</label>
                  <select name="productname" onChange={handleChange} value={values.productname}>
              <option value="-1">Please select a productName</option>
              {productId.map((x) => {
                return <option key={x.productid} value={x.productname} name={x.productname}>{x.productname}</option>;
              })}
            </select>
                  {errors.productname ? errors.productname : null}
                </div>
                <label for="validationDefaultUsername">Stock Id</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name="stockId" value={values.stockId} onChange={handleChange} />
                    {errors.stockId ? errors.stockId : null}
                  </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefaultUsername">Supplier name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name="supplierName" value={values.supplierName} onChange={handleChange} />
                    {errors.SupplierName ? errors.SupplierName : null}
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Stock</label>
                  <input type="text" class="form-control" id="validationDefault05" name="stock" value={values.stock} onChange={handleChange} />
                  {errors.stock ? errors.stock : null}
                </div>

              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">Quantity</label>
                  <input type="text" class="form-control" id="validationDefault03" name="quantity" value={values.quantity} onChange={handleChange} />
                  {errors.quantity ? errors.quantity : null}
                </div>

                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Expiry Date</label>
                  <input type="Date" class="form-control" id="validationDefault04" name="expiryDate" value={values.expiryDate} onChange={handleChange} />
                  {errors.expiryDate ? errors.expiryDate : null}
                </div>

                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Arrival Date</label>
                  <input type="Date" class="form-control" id="validationDefault05" name="arrivalDate" value={values.arrivalDate} onChange={handleChange} />
                  {errors.arrivalDate ? errors.arrivalDate : null}
                </div>
                
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Damaged Stock</label>
                  <input type="text" class="form-control" id="validationDefault05" name="damagedStock" value={values.damagedStock} onChange={handleChange} />
                  {errors.damagedStock ? errors.damagedStock : null}
                </div>


              </div>

              <button class="btn btn-primary" type="submit" >Add Stock</button>

            </form>
          </div></div></div></div>

  )
}