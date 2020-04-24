import React from 'react';

const Navigation = props => (
    <div className='nav'>
        <h1>Navigation</h1>
        <ul>
            <li>
                <a href="/login">Log in</a>
            </li>
            <li>
                <a href="/register">register</a>
            </li>
        </ul>
    </div>
)

export default Navigation;