import React from 'react';
import { Link } from 'react-router-dom';

function LoginName(){
    const name = 'Hetu';
    return(
        <>
        <h1>Login component</h1><br />

        <Link to="/product-list">Login</Link>
        <br />
        {name}<br />

        <Link to="/register">ProductList</Link>

        </>
    );
}

export default LoginName;