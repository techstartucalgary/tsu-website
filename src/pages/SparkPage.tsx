import React, { Component, useEffect, useState } from 'react';
import './SparkPage.css';
import axios from "axios";
import PostButton from "components/TechSpark/postButton"
import Event from '../components/TechSpark/Event'
import Login from '../components/TechSpark/Login'
import SignIn from '../components/TechSpark/SignIn'
import Popup from "components/TechSpark/Popup"
import Register from '../components/TechSpark/Register'
import MenuButton from "components/TechSpark/MenuButton"
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

    const [displayPost,setDisplayPost] = useState(false)
    //States: PostCreation(1), SignIn(2)
    const [windowType,setWindowType] = useState(0)
    function showPost(){
        setDisplayPost(true)
    }
    function hidePost(){
        setDisplayPost(false)
    }
    function showPostCreation(){
        setWindowType(1)
    }
    function showSignIn(){
        setWindowType(2)
    }

    return(
    <div className="sparkBackground" id="sparkPageTop">
        {displayPost && <Popup windowType={windowType} hidePost={hidePost}/>}
    <div>

        <div className="sparkTitle">
            Tech Spark
        </div>
        <div className="sparkMissionStatement">
        TechStart has partnered with the Hunter Hub to create TechSpark where we believe that young entrepreneurs have great potential to create innovative products and solutions. Our goal is to help those seeking new opportunities or collaborators by providing a space for individuals to post their ideas, find out more about technolgy focused entrepreneurship events, and connect with like minded individuals looking for specific skill sets.
        </div>
    <div className="sparkOuterGrid">
        <div className="sparkMenuContainer sparkContentPage">
            <div className="sparkContentTitle">
                Menu
            </div>
            <div className="sparkMenuGrid">
                <MenuButton text={"Sign in"} showPost={showPost} showSignIn={showSignIn}/>
                <MenuButton text={"Profile"}/>
                <MenuButton text={"Post History"}/>

            </div>
        </div>   
       <div className="sparkContentPage">
           <div className="sparkContentTitle">Whats the latest?:</div>
           <div className="sparkInnerGrid">
               <Event/>
               <Event/>
               <Event/>
               <Event/>
               <Event/>
               <Event/>
           </div>
        </div>
        <div className="sparkContentPage">
        <div className="sparkContentTitle">
            See what people are saying:
            <div className="sparkInnerGrid">
            <PostButton showPost={showPost} showPostCreation={showPostCreation}/>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    
    
    
     
      
        )
    }


export default Dashboard