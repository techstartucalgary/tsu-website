import HomePage from 'pages/HomePage';
import DocsPage from 'pages/DocsPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header';
import './App.css';

function App(){
    return <Router>
        <div className="App">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/docs">
                        <DocsPage />
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>
}

export default App;