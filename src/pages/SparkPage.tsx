import React, { Component, useEffect } from 'react';
import './SparkPage.css';
import axios from "axios";
import '../components/TechSpark/Event'

const dataRoot = "https://techstartbackend.herokuapp.com"
function Dashboard() {
    
    const [newsCategories, setNewsCategories] = React.useState([]);

    const[news, setNews] = React.useState([])
    
   
return(
    <div className="sparkPage">
    <body>
        
        <div className="techsparkTitle">Tech Spark</div>
        <div className = "page">
            <div className="techsparkTitle" id = "first">Mission</div>
            <p className = "techspark_about">TechStart has partnered with the Hunter Hub to create TechSpark where we believe that young entrepreneurs have great potential to create innovative products
and solutions. Our goal is to help those seeking new opportunities or collaborators by 
providing a space for individuals to post their ideas, find out more about technolgy 
focused entrepreneurship events, and connect with like minded individuals looking for 
specific skill sets.</p>
        </div>
        
       <div className="page">
           <div className="techsparkTitle">Whats the Latest?</div>
           <div className="sparkGrid"></div>
        </div>
    </body>   
       <br/>
    <div className="page">
        <div className="techsparkTitle">See What People Are Saying</div>
        <div className="sparkGrid"></div>
    </div>
    </div> 
      
        )
    }


export default Dashboard