import { Component } from "react";
import React from "react";
import cart from "../images/cart.png"


class NavBar extends Component{
    render(){
        return (
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Signup</li>
                    <li><img src={cart} className="cart"/></li>
                </ul>
                
            </div>
        )
    }
}

export default (NavBar);