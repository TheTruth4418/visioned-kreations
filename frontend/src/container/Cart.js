import { Component } from "react"
import { connect } from "react-redux"
import { viewCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class Cart extends Component{

    componentDidMount(){
        this.props.viewCart()
    }

render(){
    let cartArr = []
    if(this.props.cart){
    for(const [key,value] of Object.entries(this.props.cart)){
        cartArr.push(<div className="cart-item-container">
            <p>{key}</p>
            <p>{`Price ${value.price*value.quantity}`}</p>
            <p>{`Quantity: ${value.quantity}`}</p>
        </div>)
    }
}
    return (
        <div className="item-container">
            {cartArr}
        </div>
    )
    }
}

const MSTP = state => {
    return {
        cart: state.cart 
    }
}

const MDTP = dispatch => {
    return {
        viewCart: obj => dispatch(viewCart(obj))
    }
}

export default connect(MSTP,MDTP)(Cart)