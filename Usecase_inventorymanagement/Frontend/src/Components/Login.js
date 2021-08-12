import React,{useState} from 'react';
import './Format.css'
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function Login() {
  const history = useHistory();
  const validationSchema = Yup.object({
    username: Yup.string().required("username is mandatory"),
    password: Yup.string().required("password is mandatory"),
   
  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: ''
     
    },
    validationSchema,
    onSubmit(values) {
      axios.post("http://localhost:8080/login",values)
      .then(result =>
         {
           if(result.status==200){
            console.log("=============Submitted");
            console.log(result.status);
            console.log(result.data);
            console.log(result.data.token);
            localStorage.setItem('token',result.data.token);
            localStorage.setItem('roles',result.data.roles[0]);
            if(result.data.roles[0]=="ROLE_ADMIN")
            {
              console.log('Inside admin success redirection');
              history.push('/dashboard');
            }
            else if(result.data.roles[0]=="ROLE_USER")
            {
              console.log('Inside user success redirection');
              history.push('/userdashboard');
            }
           }
        }
      ).catch((err) => {
        console.log(err.response.status==401);
        errors.username = 'Invalid Username or Password';
      })  
    }

  })
    return (
       <div>
          <div class="container">
  <div class="left">
    <div class="header">
      <h2 class="animation a1">Welcome</h2>
      <h4 class="animation a2">Log in to your account using email and password</h4>
    </div>
    <div class="form">
      <input type="text" name="username" class="form-field animation a3" placeholder="Email Address" onChange={handleChange}/>
      {errors.username ? errors.username : null}
      <input type="password" name="password" class="form-field animation a4" placeholder="Password" onChange={handleChange}/>
      {errors.password ? errors.password : null}
      <p class="animation a5"><a href="#">Forgot Password</a></p>
      <button class="animation a6" onClick={handleSubmit}>LOGIN</button>
    </div>
  </div>
  <div class="right"></div>
</div>

       </div>

    )
};