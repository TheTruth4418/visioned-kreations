import { Component } from "react"
import { connect } from "react-redux"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ShirtInfo extends Component{

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
                <button>Add to Cart</button>
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
       
    }
}

export default connect(MSTP,MDTP)(ShirtInfo)