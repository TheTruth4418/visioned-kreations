import { Component } from "react";
import React from "react";
import cart from "../images/cart.png"
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {connect} from 'react-redux'


class NavBar extends Component{
    render(){
        console.log(this.props)
        return (
            <div className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {this.props.loggedIn ? 
                    <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                    </> : 
                    <p>LogOut will go here</p>}
                    <li><img src={cart} alt="" className="cart"/></li>
                </ul>
                
            </div>
        )
    }
}

const MSTP = state => {
    return {
        loggedIn: state.currentUser === undefined
    }
}

export default connect(MSTP)(NavBar);