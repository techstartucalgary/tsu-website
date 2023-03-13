/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, useEffect } from "react";
import "./SparkPage.css";
import axios from "axios";

const dataRoot = "https://techstartbackend.herokuapp.com";
function Dashboard() {
  const [newsCategories, setNewsCategories] = React.useState([]);

  const [news, setNews] = React.useState([]);

  //Get existing news sections
  // useEffect(() => {
  //     axios.get(
  //         `${dataRoot}/news-section`
  //       ).then((response) => {
  //         if (response.status === 200) {

  //             let data = response.data;
  //             setNewsCategories(data)
  //             console.log(data)

  //       }}, (error) => {
  //         console.log(error);
  //       });;
  // },[])
  // console.log(newsCategories)

  // Create new news section
  // useEffect(() => {
  //     axios.post(
  //         `${dataRoot}/news-section/create`, {
  //             news_category: 'TestProjects1234',
  //         }
  //       ).then((response) => {
  //         if (response.status === 200) {

  //             let data = response.data;
  //             let keys = Object.keys(data)
  //             setNewsCategories(data)
  //             console.log(data)
  //             console.log(keys)

  //       }}, (error) => {
  //         console.log(error);
  //       });;
  // },[])
  // console.log(newsCategories)

  // const id = 1

  // Delete existing news section
  // useEffect(() => {
  //     axios.delete(
  //         `${dataRoot}/news-section/${17}/delete`
  //       ).then((response) => {

  //             let data = response.data;
  //             setNewsCategories(data)
  //             console.log(data)

  //       }, (error) => {
  //         console.log(error);
  //       });;
  // },[])

  // console.log(newsCategories)

  // Update existing news section
  // ua

  // useEffect(() => {
  //     axios.delete(
  //         `${dataRoot}/news/2/delete`
  //       ).then((response) => {
  //         if (response.status === 200) {

  //             let data = response.data;
  //             setNews(data)
  //             console.log(data)

  //       }}, (error) => {
  //         console.log(error);
  //       });;
  // },[])
  // console.log(news)

  // useEffect(() => {
  //     axios.put(
  //         `${dataRoot}/news/1`, {
  //             category: '16',
  //             date_published: '2021-04-07',
  //             news_description: "description",
  //             source: 'source',
  //             title: "modifiedtitle",
  //             url: 'url'
  //         }
  //       ).then((response) => {
  //         if (response.status === 200) {

  //             let data = response.data;
  //             setNews(data)

  //       }}, (error) => {
  //         console.log(error);
  //       });;
  // },[])
  // console.log(news)

  // useEffect(() => {
  //     axios.post(
  //         `${dataRoot}/register`, {
  //             username: 'testusername',
  //             password: 'testpassword'
  //         }
  //       ).then((response) => {

  //             let data = response.data;
  //             console.log(data)

  //       }, (error) => {
  //         console.log(error);
  //       });;
  // },[])

  return (
    <div className="sparkPage">
      <body>
        <div className="techsparkTitle">Tech Spark</div>

        <div className="page">
          <div className="techsparkTitle">Whats the latest?:</div>
          <div className="sparkGrid"></div>
        </div>
      </body>
      <br />
      <div className="page">
        <div className="techsparkTitle">See what people are saying</div>
        <div className="sparkGrid"></div>
      </div>
    </div>
  );
}

export default Dashboard;
