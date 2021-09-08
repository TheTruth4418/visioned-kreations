import { Component } from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom"
import { orderHistory } from "../actions";
class OrderHistory extends Component {

    componentDidMount(){
        this.props.orderHistory()
        if(!localStorage.token){
            this.props.history.goBack()
        }
    }

    render(){
        let ordersArr = []
        if (this.props.orders){
            for(const [key,value] of Object.entries(this.props.orders).sort()){
                ordersArr.push(
                    <li key={`Order #${value.id}`}> <NavLink to={`/orders/confirmation/${value.id}`}>{`Order #${value.id}`}</NavLink> <br/> </li>
                )
            }
        }
        return(
            <div className="order-history-container">
                <h1>Order History</h1>
                {ordersArr}
            </div>
        )
    }
} 

const MSTP = state => {
    return {
        orders: state.orders
    }
}

const MDTP = dispatch => {
    return {
        orderHistory: () => dispatch(orderHistory())
    }
}

export default connect(MSTP, MDTP)(OrderHistory)