import { Component } from "react";
import React from "react";
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {connect} from 'react-redux'
import { logoutUser } from "../actions";


class NavBar extends Component{

    loginActions(arg = 0){
        if (arg !== 0){
            return(
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </>
            )
        } else {
            return(
                <>
                    <NavLink to="/orders">Order History</NavLink>
                    <a href="/" onClick={this.logout} >Log Out</a>
                </>
            )
        }
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
                {localStorage.token ? this.loginActions() : this.loginActions(1) }
                <NavLink to="/cart" className="cartDiv">Cart</NavLink>
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