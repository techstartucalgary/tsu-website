import React, { Component } from 'react';
import './SparkPage.css';
import Event from '../components/TechSpark/Event'
import Login from '../components/TechSpark/Login'
import SignIn from '../components/TechSpark/SignIn'
import PostCreation from '../components/TechSpark/PostCreation'
import Register from '../components/TechSpark/Register'
class Dashboard extends Component {
    render() {
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
           <div className="sparkGrid">
           <Event 
                name = "Event 1" 
                date = "March 30th, 2021"
                img = "https://picsum.photos/200"
                link = ""
                description = "Tech Start UCalgary Meeting"
          /> 
          <Event 
                name = "Event 2" 
                date = "April 20th, 2021"
                img = "https://picsum.photos/200" 
                link = "https://www.ucalgary.ca/hunter-hub"
                description = "Hunter Hub Conference"
            />
            <Event 
                name = "Event 1" 
                date = "March 30th, 2021"
                img = "https://picsum.photos/200"
                link = ""
                description = "Tech Start UCalgary Meeting"
          /> 
          <Event 
                name = "Event 2" 
                date = "April 20th, 2021"
               img = "https://picsum.photos/200" 
                link = "https://www.ucalgary.ca/hunter-hub"
                description = "Hunter Hub Conference"
                />
           </div>
        </div>
    </body>   
       <br/>
    <div className="page">
        <div className="techsparkTitle">See What People Are Saying</div>
        <div className="sparkGrid">
            
        </div>

    </div>
    <SignIn/>
    </div> 
      
        )
    }
}

export default Dashboard