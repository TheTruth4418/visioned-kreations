import { Component } from "react"
import { connect } from "react-redux"
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
    
    inventoryReader(arg){
        switch(arg){
            case "S":
                return <p>{this.props.item.products[0].stock}</p>
            case "M":
                return <p>{this.props.item.products[1].stock}</p>
            case "L":
                return <p>{this.props.item.products[2].stock}</p>
            default:
                return <p>Select a size</p>

        }
    }

    componentDidMount(){
    }

render(){
    let item = this.props.item
    return (
        <div className="item-container">
            <p>Shirt Information</p>
            <img src={require(`../images/${item.category}/${item.name}.png`).default} alt="" className={item.category} />
            <div className="sizes">
                <button name="small" value="S" onClick={this.onChange}>S</button>
                <button name="medium" value="M" onClick={this.onChange}>M</button>
                <button name="large" value="L" onClick={this.onChange}>L</button>
            </div>
            {this.state.size ? (this.inventoryReader(this.state.size) !== 0 ? <> <p>In Stock</p> <button>Add to Cart</button> </> : <p>Out of Stock</p>) : <p>Select a size</p>}
            
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