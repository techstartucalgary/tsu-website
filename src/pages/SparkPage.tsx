import React, { Component, useEffect } from 'react';
import './SparkPage.css';
import axios from "axios";

const dataRoot = "https://techstartbackend.herokuapp.com"
function Dashboard() {
    
    const [newsCategories, setNewsCategories] = React.useState([]);

    const[news, setNews] = React.useState([])
    
   
return(
    <div className="sparkPage">
    <body>
        
        <div className="techsparkTitle">Tech Spark</div>

        
       <div className="page">
           <div className="techsparkTitle">Whats the latest?:</div>
           <div className="sparkGrid"></div>
        </div>
    </body>   
       <br/>
    <div className="page">
        <div className="techsparkTitle">See what people are saying</div>
        <div className="sparkGrid"></div>
    </div>
    </div> 
      
        )
    }


export default Dashboard