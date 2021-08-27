import { Component } from "react"
import { connect } from "react-redux"
import { addShirtToCart } from "../actions"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ShirtInfo extends Component{

    state = {
        size: undefined
    }

    onChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    submitCart = (e) => {
        this.props.addShirtToCart(this.inventoryReader(this.state.size))
    }
    
    inventoryReader(arg){
        switch(arg){
            case "S":
                return this.props.item.products[0]
            case "M":
                return this.props.item.products[1]
            case "L":
                return this.props.item.products[2]
            default:
                return <p>Select a size</p>

        }
    }

render(){
    let item = this.props.item
    return (
        <div className="item-container">
            <div className="item-info">
                <h2>{item.name}</h2>
                <img src={require(`../images/${item.category.name}/${item.name}.png`).default} alt="" className={item.category.name} />
            </div>
            <div className="item-options">
                <div className="sizes">
                    <button name="small" value="S" onClick={this.onChange}>S</button>
                    <button name="medium" value="M" onClick={this.onChange}>M</button>
                    <button name="large" value="L" onClick={this.onChange}>L</button>
                </div>
                {this.state.size ? (this.inventoryReader(this.state.size).stock !== 0 ? <> <p>In Stock</p> <p>Price ${this.inventoryReader(this.state.size).price}</p> <button onClick={this.submitCart}>Add to Cart</button> </> : <p>Out of Stock</p>) : <p>Select a size</p>}
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
        addShirtToCart: obj => dispatch(addShirtToCart(obj))
    }
}

export default connect(MSTP,MDTP)(ShirtInfo)