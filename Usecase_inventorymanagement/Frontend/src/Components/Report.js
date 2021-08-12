import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import './Product.css'

export default function Report() {
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
        // change results based on calendar date click
        setCalDate(calDate);
        
    }
    return (
        <div>
             <h3 style= {{marginLeft: "300px"}}>Report</h3>
            <div className="container-sm-6 " style= {{marginLeft: "300px",color:"red"}}>
            <div class="row" >
  <div class="col-sm-6" >
    <div class="card" >
      <div class="card-body">
      <div className="result-calendar">
                 
            <Calendar onChange={onChange} value={calDate}/>
            </div>
        <p class="card-text"></p>
        <a href="/products/add" class="btn btn-primary">Submit</a>
      </div>
    </div>
  </div>
  </div></div>
        </div>
    )}