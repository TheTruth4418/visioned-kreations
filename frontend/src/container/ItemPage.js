import { Component } from "react"
import { connect } from "react-redux"
import { fetchItem } from "../actions"
import ShirtInfo from "./ShirtInfo"
import CupInfo from "./CupInfo"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ItemPage extends Component{

    state={
        item: this.props.location.pathname.split("/")[2] 
    }

    componentDidMount(){
        this.props.fetchItem(this.state)
    }

    infoCard(){
        switch(this.props.item.category){
            case "Shirt":
                return <ShirtInfo />
            case "Cup":
                return <CupInfo />
            default:
                return null;
        }
    }

    render(){
        return (
            <div className="item-container">
                {this.props.item ? this.infoCard() : <h2>Loading</h2> }
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
            fetchItem: obj => dispatch(fetchItem(obj))
        }
    }

    export default connect(MSTP,MDTP)(ItemPage)