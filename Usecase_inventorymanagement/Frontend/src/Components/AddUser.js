import React, { useState } from 'react';
import './Product.css'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddUser() {
  const validationSchema = Yup.object({
    
    username: Yup.string().required("name is mandatory"),
    userdob: Yup.string().required("Dob is mandatory"),
    usermobil: Yup.number().required("mobile is mandatory"),
    useremail: Yup.string().required("email is mandatory"),

  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
     
      username: '',
      userdob: '',
      usermobil: '',
      useremail: ''
    },
    validationSchema,
    onSubmit(values) {
      axios.post("http://localhost:8080/user/add", values).then(res => res.data).then((data) => {
        alert("User added successfully");
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
            <div className="card-header"><h4>ADD USER</h4></div>
            <form onSubmit={handleSubmit} noValidate>
              <div class="form-row">
               
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">User Name</label>
                  <input type="text" class="form-control" id="validationDefault02" name="username" value={values.name} onChange={handleChange} />
                  {errors.username ? errors.username : null}
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefaultUsername">Date of Birth</label>
                  <div class="input-group">
                    <input type="Date" class="form-control" id="validationDefaultUsername" name="userdob" value={values.userdob} onChange={handleChange} />
                    {errors.userdob ? errors.userdob : null}
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">Phone Number</label>
                  <input type="text" class="form-control" id="validationDefault03" name="usermobil" value={values.usermobil} onChange={handleChange} />
                  {errors.usermobil ? errors.usermobil : null}
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Email Id</label>
                  <input type="text" class="form-control" id="validationDefault04" name="useremail" value={values.useremail} onChange={handleChange} />
                  {errors.useremail ? errors.useremail : null}
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">

                </div>
              </div>
              <button class="btn btn-primary" type="submit">Add User</button>
            </form>
          </div></div></div></div>

  )
}