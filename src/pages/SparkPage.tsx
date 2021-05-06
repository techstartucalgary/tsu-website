import React, { Component, useEffect } from 'react';
import './SparkPage.css';
import axios from "axios";
import Event from '../components/TechSpark/Event'
import Login from '../components/TechSpark/Login'
import SignIn from '../components/TechSpark/SignIn'
import PostCreation from '../components/TechSpark/PostCreation'
import Register from '../components/TechSpark/Register'
import '../components/TechSpark/Event'
import { EventType } from "./EventType"

const dataRoot = "https://techstartbackend.herokuapp.com"
function Dashboard() {
    
const [newsCategories, setNewsCategories] = React.useState([]);

const [news, setNews] = React.useState([])
    
   
    const dataRoot = "https://techstartbackend.herokuapp.com"
    const [token, setToken] = React.useState([]);
    const [userID, setUserID] = React.useState([]);

    const [events, setEvents] = React.useState([])

    //Get existing news 
    useEffect(() => {
        axios.get(
            `${dataRoot}/news`
          ).then((response) => {
            if (response.status === 200) {
                
                let data = response.data;
                setEvents(data)
                let event = new EventType(data[0])
                console.log(event)
                console.log(data)
                console.log(JSON.parse(data))
          }}, (error) => {
            console.log(error);
          });; 
    },[])
    console.log(newsCategories)
    console.log(events)
    console.log(events.length)
    console.log(events[0])
    console.log(events[0])
    // if (events.length > 0) {
    //     console.log(events[0].category)
    // }
    

  useEffect(() => {
        axios.post(
            `${dataRoot}/login`, {
                username: 'test@testing.test',
                password: 'WordPass123'
            }
          ).then((response) => {
                
                let token = response.data.token;
                let userID = response.data.id;
                setToken(token)
                setUserID(userID)
                console.log(token)
                
          }, (error) => {
            console.log(error);
          });; 
    },[])

    
    useEffect(() => {
      axios.put(
          `${dataRoot}/update-post/1`, {
              author: userID,
              title: 'changed titlee',
              date_posted: '2021-05-01',
              post_description: 'changed description',
              
          }, {headers: {'Authorization': `Token ${token}`}}
        ).then((response) => {
              
              let token = response.data.token;;
              setToken(token)
              console.log(token)
              
        }, (error) => {
          console.log(error);
        });; 
    },[])

    useEffect(() => {
        axios.post(
            `${dataRoot}/login`, {
                username: 'test@testing.test',
                password: 'WordPass123'
            }
          ).then((response) => {
                
                let token = response.data.token;
                let userID = response.data.id;
                setToken(token)
                setUserID(userID)
                console.log(token)
                
          }, (error) => {
            console.log(error);
          });; 
    },[])


    
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
    </div> 
      
        )
    }


export default Dashboard