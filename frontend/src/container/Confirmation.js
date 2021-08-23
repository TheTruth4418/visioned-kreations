import React from "react";
import {Component} from "react";
import { connect } from "react-redux";
import { displayOrder } from "../actions";

class Confirmation extends Component{

    componentDidMount(){
        let id = this.props.history.location.pathname.split("/")[3]
        this.props.displayOrder(id)
        if(!localStorage.token){
            this.props.history.goBack()
        }
    }

    render(){
        let orderArr = []
        if(this.props.order){
            delete this.props.order["id"]
            for(const [key,value] of Object.entries(this.props.order).sort()){
                orderArr.push(<div className="order-item-container" key={value.id}>
                    <p>{key}</p>
                    <p>{`Quantity: ${value.quantity}`}</p>
                    <p>{`Price ${value.price*value.quantity}`}</p>
                </div>
                )
            }
        }
        return (
            <>
                <h2>Order Confirmation</h2>
                {orderArr}
            </>
        )
    }
}

const MSTP = state => {
    return {
        order: state.order
    }
}

const MDTP = dispatch => {
    return {
        displayOrder: (id) => dispatch(displayOrder(id))
    }
}

export default connect(MSTP, MDTP)(Confirmation)