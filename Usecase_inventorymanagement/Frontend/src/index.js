import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// For GET requests
axios.interceptors.request.use( 
  (req) => {
     // Add configurations here
     const token = localStorage.getItem('token');
     req.headers.Authorization = token ? `Bearer ${token}`: '';
     console.log(req.headers.Authorization);
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
     // Add configurations here
     console.log('a');
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     
     return res;
  },
  (err) => {
     if(err.response.status==401){
       localStorage.setItem('token','');
     }
     return Promise.reject(err);
  }
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
