/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, useEffect, useState } from "react";
import "./SparkPage.css";
import axios from "axios";
import PostButton from "components/TechSpark/postButton";
import Event from "../components/TechSpark/Event";
import Login from "../components/TechSpark/Login";
import SignIn from "../components/TechSpark/SignIn";
import Popup from "components/TechSpark/Popup";
import Register from "../components/TechSpark/Register";
import MenuButton from "components/TechSpark/MenuButton";
import Post from "components/TechSpark/post";
import { EventType } from "../components/TechSpark/EventType";
import { PostType } from "./PostType";

function Dashboard() {
  const [newsCategories, setNewsCategories] = React.useState([]);

  const [news, setNews] = React.useState([]);

  const dataRoot = "https://techstartbackend.herokuapp.com";
  const [token, setToken] = React.useState([]);
  const [userID, setUserID] = React.useState([]);

  const [events, setEvents] = React.useState([]);

  const [posts, setPosts] = React.useState([]);

  //Get existing news
  useEffect(() => {
    axios.get(`${dataRoot}/news`).then(
      (response) => {
        if (response.status === 200) {
          const data = response.data;
          setEvents(data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  //Get existing news
  useEffect(() => {
    axios.get(`${dataRoot}/post`).then(
      (response) => {
        if (response.status === 200) {
          const data = response.data;
          setPosts(data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log(posts);
  const eventArray = [];
  const postArray = [];
  for (let index = 0; index < events.length; index++) {
    const eventWithType = new EventType(events[index]);
    eventArray.push(eventWithType);
  }

  const eventList = eventArray.map((ev) => (
    <Event
      name={ev.title}
      date={ev.date_published}
      img={ev.url}
      link={ev.source}
      description={ev.news_description}
    />
  ));

  for (let index = 0; index < posts.length; index++) {
    const postWithType = new PostType(posts[index]);
    postArray.push(postWithType);
  }

  const postList = postArray.map((pst) => (
    <Post
      title={pst.title}
      date={pst.date_posted}
      // author = {pst.author}
      description={pst.post_description}
    />
  ));
  useEffect(() => {
    axios
      .post(`${dataRoot}/login`, {
        username: "test@testing.test",
        password: "WordPass123",
      })
      .then(
        (response) => {
          const token = response.data.token;
          const userID = response.data.id;
          setToken(token);
          setUserID(userID);
          console.log(token);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    axios
      .put(
        `${dataRoot}/update-post/1`,
        {
          author: userID,
          title: "changed titlee",
          date_posted: "2021-05-01",
          post_description: "changed description",
        },
        { headers: { Authorization: `Token ${token}` } }
      )
      .then(
        (response) => {
          const token = response.data.token;
          setToken(token);
          console.log(token);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const [displayPost, setDisplayPost] = useState(false);
  //States: PostCreation(1), SignIn(2)
  const [windowType, setWindowType] = useState(0);
  function showPost() {
    setDisplayPost(true);
  }
  function hidePost() {
    setDisplayPost(false);
  }
  function showPostCreation() {
    setWindowType(1);
  }
  function showSignIn() {
    setWindowType(2);
  }

  return (
    <div className="sparkBackground" id="sparkPageTop">
      {displayPost && <Popup windowType={windowType} hidePost={hidePost} />}
      <div>
        <div className="sparkTitle">Community</div>
        <div className="sparkMissionStatement">
          Tech Start's community page helps University of Calgary students stay
          up to date with the latest news in technology and startups. We've
          partnered with the Hunter Hub to show news and events from within the
          University and from abroad. In the "See what people are saying"
          section, you can post your ideas, projects, requests, and connect with
          other students. It's a great way to find projects, collaborators, or
          make connections with like-minded students!
        </div>
        <div className="sparkOuterGrid">
          <div className="sparkMenuContainer sparkContentPage">
            <div className="sparkContentTitle">Menu</div>
            <div className="sparkMenuGrid">
              <MenuButton
                text={"Sign in"}
                showPost={showPost}
                showSignIn={showSignIn}
              />
              {/* <MenuButton text={"Profile"} />
                            <MenuButton text={"Post History"} /> */}
            </div>
          </div>
          <div className="sparkContentPage">
            <div className="sparkContentTitle">Whats the latest?:</div>
            <div className="sparkInnerGrid">{eventList}</div>
          </div>
          <div className="sparkContentPage">
            <div className="sparkContentTitle">
              See what people are saying:
              <div className="sparkInnerGrid">
                <PostButton
                  showPost={showPost}
                  showPostCreation={showPostCreation}
                />
                {postList}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
