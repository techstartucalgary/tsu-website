import React, { Component } from 'react';
import './SparkPage.css';


class Dashboard extends Component {
    render() {
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
}

export default Dashboard