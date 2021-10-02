import React from "react";
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {connect} from 'react-redux'
import { logoutUser } from "../actions";

function NavBar(props){

    function loginActions(arg = 0){
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
                    <a href="/" onClick={logout} >Log Out</a>
                </>
            )
        }
    }

    function logout(e){
        e.preventDefault();
        localStorage.removeItem("token")
        props.logoutUser()
    }

    function logo(e){
        e.preventDefault()
        let x = document.getElementById("nav");
        if (x.className === "nav") {
          x.className += "-responsive";
        } else {
          x.className = "nav";
        }
      
    }

        return (
            <div id="nav" className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                {localStorage.token ? loginActions() : loginActions(1) }
                <NavLink to="/cart" className="cartDiv">Cart</NavLink>
                <a href="/" className="resp" onClick={logo}>
                    Menu
                </a>
            </div>
        )
    }

const MSTP = state => {
    return {
        loggedIn: state.currentUser === undefined,
        user: state.currentUser
    }
}

const MDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
} 

export default connect(MSTP, MDTP)(NavBar);