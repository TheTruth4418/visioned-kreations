import { Component } from "react"
import { connect } from "react-redux"
import { getItems } from "../actions"
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ItemPage extends Component{

    componentDidMount(){
        
    }

render(){
    return (
        <div className="item-container">
            <h1>Item page</h1>
        </div>
    )
    }
}

const MSTP = state => {
    return {
        items: state.items 
    }
}

const MDTP = dispatch => {
    return {
        getItems: () => dispatch(getItems())
    }
}

export default connect(MSTP,MDTP)(ItemPage)