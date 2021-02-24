import HomePage from 'pages/HomePage';
import DocsPage from 'pages/DocsPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';

function App(){
    return <Router>
        <div className="App">
            <Navbar />
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
        </div>
    </Router>
}

export default App;