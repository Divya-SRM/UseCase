import React,{useState} from 'react';
import './Format.css'
export default function Login() {
    const[credential,setCredential]=useState([]);
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setCredential((prev)=>{
        return{
            ...prev,
            [name]:value
        }}) 
        console.log(credential);   
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    alert("Login Successfully")}
    return (
       <div>
          <div class="container">
  <div class="left">
    <div class="header">
      <h2 class="animation a1">Welcome</h2>
      <h4 class="animation a2">Log in to your account using email and password</h4>
    </div>
    <div class="form">
      <input type="email" name="email" class="form-field animation a3" placeholder="Email Address" onChange={handleOnChange}/>
      <input type="password" name="password" class="form-field animation a4" placeholder="Password" onChange={handleOnChange}/>
      <p class="animation a5"><a href="#">Forgot Password</a></p>
      <button class="animation a6" onClick={handleSubmit}>LOGIN</button>
    </div>
  </div>
  <div class="right"></div>
</div>

       </div>

    )
};