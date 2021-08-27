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

    shirtLink = (key, value) => {
        if(value.category === "Shirts"){
            let item = key.split(" ")
            item = item.slice(0,item.length--)
            return <img src={require(`../images/${value.category}/${item.join(" ")}.png`).default} alt="shirt img" className={value.category} />
        } else {
            <img src={require(`../images/${value.category}/${key}.png`).default} alt="shirt img" className={value.category} />
        }
    }

    render(){
        let orderArr = []
        if(this.props.order){
            delete this.props.order["id"]
            for(const [key,value] of Object.entries(this.props.order).sort()){
                orderArr.push(<div className="order-item-container" key={value.id}>
                    <div className="order-item-info">
                        <p>{key}</p>
                        <p>{`Quantity: ${value.quantity}`}</p>
                        <p>{`Price ${value.price*value.quantity}`}</p>
                    </div>
                    <div className="order-item-img">
                        {this.shirtLink(key,value)}
                    </div>
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