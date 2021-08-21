import React from "react";
import {Component} from "react";
import { connect } from "react-redux";

class Confirmation extends Component{
    render(){
        return (
            <h2>Order Confirmation</h2>
        )
    }
}

const MDTP = x => {
    return {

    }
}

export default connect(null,MDTP)(Confirmation)