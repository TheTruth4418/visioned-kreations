import { Component } from "react"
import { connect } from "react-redux"
import { viewCart,removeItem,clearCart, checkoutCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class Cart extends Component{

    componentDidMount(){
        this.props.viewCart()
        if(!localStorage.token){
            this.props.history.goBack()
        }
    }

    removeItem = e => {
        let obj = {
            id: e.target.id
        }
        this.props.removeItem(obj)
    }

    clearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?") === true){
            this.props.clearCart()
        }
    }

    checkOut = () => {
        this.props.checkoutCart(this.props.history)
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
    let cartArr = []
    let total = 0
    if(this.props.cart){
        for(const [key,value] of Object.entries(this.props.cart).sort()){
            cartArr.push(<div className="cart-item-container" key={value.id}>
                <div className="cart-info">
                    <p>{key}</p>
                    <p>{`Quantity: ${value.quantity}`}</p>
                    <p>{`Price ${value.price*value.quantity}`}</p>
                    <button id={value.id} onClick={this.removeItem}>Remove</button>
                </div>
                <div className="cart-img">
                    {this.shirtLink(key,value)}
                </div>
            </div>
            )
        total += value.price*value.quantity
        }
    }
    return (
        <div className="cart-container">
            {cartArr.length === 0 ? <p>Your Cart is empty</p> :
            <>
                {cartArr}
                <h3>{`Subtotal $${total.toFixed(2)}`}   <button onClick={this.checkOut}>CHECKOUT</button></h3>
                <button onClick={this.clearCart}>Clear Cart</button>
            </> }
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
        viewCart: obj => dispatch(viewCart(obj)),
        removeItem: id => dispatch(removeItem(id)),
        clearCart: () => dispatch(clearCart()),
        checkoutCart: (props) => dispatch(checkoutCart(props))
    }
}

export default connect(MSTP,MDTP)(Cart)