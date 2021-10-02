import { Component } from "react"
import { connect } from "react-redux"
import { addShoesToCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ControllerInfo extends Component{

    addToCart = e => {
        this.props.addShoesToCart(this.props.item.products[0])
    }

    componentDidMount(){
    }

render(){
    let item = this.props.item
    return (
        <div className="item-container">
            <div className="item-info">
                <img src={require(`../images/${item.category.name}/${item.name}.png`).default} alt="" className={item.category.name} />
            </div>
            <div className="item-options">
                <p>Price ${item.price}</p>
                {item.products[0].stock > 0 ? 
                <>
                    <p className="stock">In Stock!</p>
                    <button onClick={this.addToCart}>Add to Cart</button>
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
        addShoesToCart: obj => dispatch(addShoesToCart(obj))
    }
}

export default connect(MSTP,MDTP)(ControllerInfo)