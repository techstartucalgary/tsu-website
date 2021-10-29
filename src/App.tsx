import HomePage from "pages/HomePage";
import DocsPage from "pages/DocsPage";
import SparkPage from "pages/SparkPage";
import ApplyPage from "pages/ApplyPage";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer/Footer";
import "./App.css";
import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "components/ScrollToTop";

function App() {
  //
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Init AOS. Sets AOS default duration as 1s
  }, []);
  // Use React Router to switch between different pages
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/resources">
              <DocsPage />
            </Route>
            <Route path="/community">
              <SparkPage />
            </Route>
            <Route path="/apply">
              <ApplyPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
