import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login(){
    return(
        <>
        <Header/>
        <h1>Login Component</h1><br />

        <Link to="/register">Register</Link>
        <br />

        <Link to="/product-list">ProductList</Link>
        <br />

        <Link to="/edit-product-list">EditProductList</Link>
        <br />

        <Link to="/cart-page">CartPage</Link>
        <br />

        <Link to="/cart-item">CartItem</Link>
        <br />
        <Footer/>
        </>
    )
}

export default Login;