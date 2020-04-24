import React from 'react';

const Register = props => (
    <div className='register'>
        <h1>Register</h1>
        <form>
            <div className='register-input'>
                <label htmlFor="register">email</label>
                <input 
                    type="text" 
                    name="registerEmail" 
                    onChange={ e => props.handleInput(e) }
                />
            </div>
            <div className='register-input'>
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    name="registerPassword" 
                    onChange={ e => props.handleInput(e) }
                />
            </div>
            <button type="submit" onClick={ e => props.register(e) }>Register</button>
        </form>
    </div>
)

export default Register;