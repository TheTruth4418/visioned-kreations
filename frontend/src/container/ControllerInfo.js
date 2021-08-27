import { Component } from "react"
import { connect } from "react-redux"
import { addControllerToCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ControllerInfo extends Component{

    addToCart = e => {
        this.props.addControllerToCart(this.props.item.products[0])
    }

    componentDidMount(){
    }

render(){
    let item = this.props.item
    console.log(item.category)
    return (
        <div className="item-container">
            <div className="item-img">
                <img src={require(`../images/${item.category.name}/${item.name}.png`).default} alt="" className={item.category.name} />
            </div>
            <div className="item-options">
                <p>Price ${item.price}</p>
                    {item.products[0].stock > 0 ? 
                    <>
                        <button onClick={this.addToCart}>Add to Cart</button>
                        <p>In Stock!</p>
                    </> : 
                    <p>Out of Stock</p>}
            </div>
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
        addControllerToCart: obj => dispatch(addControllerToCart(obj))
    }
}

export default connect(MSTP,MDTP)(ControllerInfo)