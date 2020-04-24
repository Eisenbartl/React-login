import React from 'react';

const Login = props => (
    <div className="login">
        <h1>login</h1>
        <form>
            <div className='login-input'>
                <label htmlFor="email">email</label>
                <input 
                    type="email" 
                    name="loginEmail" 
                    onChange={ e => props.handleInput(e) }
                />
            </div>
            <div className='login-input'>
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    name="loginPassword" 
                    onChange={ e => props.handleInput(e) }
                />
            </div>
            <button type="submit" onClick={ e => props.login(e) }>Login</button>
        </form>
    </div>
)

export default Login;