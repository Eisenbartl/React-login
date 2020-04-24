import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path='/login' component={ Login } />
                        <Route path='/register' component={ Register } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;