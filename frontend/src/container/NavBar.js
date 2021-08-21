import { Component } from "react";
import React from "react";
import cart from "../images/cart.png"
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {connect} from 'react-redux'
import { logoutUser } from "../actions";


class NavBar extends Component{

    loginActions(){
        return(
            <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </>
        )
    }

    logout= e => {
        e.preventDefault();
        localStorage.removeItem("token")
        this.props.logoutUser()
    }

    render(){
        return (
            <div className="nav">
                <NavLink to="/">Home</NavLink>
                {this.props.loggedIn ? this.loginActions() : <><a href="/" onClick={this.logout} >Log Out</a><NavLink to="/orders">Order History</NavLink></>}
                <NavLink to="/cart" className="cartDiv"><img src={cart} alt="" className="cartImg"/></NavLink>
            </div>
        )
    }
}

const MSTP = state => {
    return {
        loggedIn: state.currentUser === undefined
    }
}

const MDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
} 

export default connect(MSTP, MDTP)(NavBar);