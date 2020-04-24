import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginEmail: '',
            loginPassword: '',
            registerEmail: '',
            registerPassword: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    handleInput(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    login(e) {
        e.preventDefault();
        const logInfo = {
            loginEmail: this.state.loginEmail,
            loginPassword: this.state.loginPassword
        }

        Axios.post('/login', { logInfo })
            .then( res => console.log('It worked') 
            .catch( err => console.log(err) )
            )

        // console.log(logInfo)
    }

    register(e) {
        e.preventDefault();
        const regInfo = {
            registerEmail: this.state.registerEmail,
            registerPassword: this.state.registerPassword
        }

        Axios.post('/register', { regInfo })
            .then( res => console.log('It worked') 
            .catch( err => console.log(err) )
            )

        // console.log(regInfo)
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Switch>
                        <Route 
                            path='/login' 
                            render={ props =>
                                <Login 
                                    handleInput={this.handleInput}
                                    login={this.login}
                                />
                            }
                        />
                        <Route 
                            path='/register' 
                            render={ props =>
                                <Register 
                                    handleInput={this.handleInput}
                                    register={this.register}
                                />
                            }
                        />
                        <Route path='/profile' component={ Profile } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;