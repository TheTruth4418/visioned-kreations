import { Component } from "react"
import { connect } from "react-redux"
import { addCupToCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ShirtInfo extends Component{

    addToCart = e => {
        this.props.addCupToCart(this.props.item.products[0])
    }

    componentDidMount(){
    }

render(){
    let item = this.props.item
    return (
        <div className="item-container">
            <h2>{item.name}</h2>
            <img src={require(`../images/${this.props.item.category}/${item.name}.png`).default} alt="" className={item.category} />
            <p>Price ${item.price}</p>
            {item.products[0].stock > 0 ? 
            <>
                <button onClick={this.addToCart}>Add to Cart</button>
                <p>In Stock!</p>
            </> : 
            <p>Out of Stock</p>}
        </div>
    )
    }
}

const MSTP = state => {
    return {
        item: state.viewing 
    }
}

const MDTP = dispatch => {
    return {
        addCupToCart: obj => dispatch(addCupToCart(obj))
    }
}

export default connect(MSTP,MDTP)(ShirtInfo)