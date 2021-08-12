import React, { useState } from 'react';
import './Dashboard.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Sidebar from './Sidebar';
export default function Dashboard() {
    return (
       
       
        <div >
             <Sidebar/>
             <br></br>
             <div style= {{marginLeft: "300px"}}>
            <div class="row">
            <div class="col-sm-4">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                        <h2 class="card-title"><FaIcons.FaCartPlus />&nbsp; Report</h2>
                        <p class="card-text"></p>
                        <a href="/reports" class="btn btn-light">Generate report</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-white bg-danger mb-3">
                    <div class="card-body">
                        <h2 class="card-title"><FaIcons.FaCartPlus />&nbsp;Purchase Order</h2>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-light">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card text-dark bg-warning  mb-3">
                        <div class="card-body">
                            <h2 class="card-title"><FaIcons.FaCartPlus />&nbsp;Sales Order</h2>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-light">Go </a>
                        </div>
                    </div>
                </div>
            
            <div class="col-sm-4">
                <div class="card text-white bg-success mb-3">
                    <div class="card-body">
                        <h2 class="card-title"><FaIcons.FaCartPlus />&nbsp;Products</h2>

                        <p class="card-text"></p>
                        <a href="#" class="btn btn-light">Go </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        

    )
}