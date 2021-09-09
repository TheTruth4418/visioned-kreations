import { Component } from "react"
import { connect } from "react-redux"
import { fetchItem } from "../actions"
import ShoesInfo from "./ShoesInfo"
import ShirtInfo from "./ShirtInfo"
import CupInfo from "./CupInfo"
import ControllerInfo from "./ControllerInfo"
//import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class ItemPage extends Component{

    state={
        item: this.props.location.pathname.split("/")[2] 
    }

    componentDidMount(){
        this.props.fetchItem(this.state)
    }

    infoCard(){
        switch(this.props.item.category.name){
            case "Shoes":
                return <ShoesInfo />
            case "Shirts":
                return <ShirtInfo />
            case "Cups":
                return <CupInfo />
            case "Controllers":
                return <ControllerInfo />
            default:
                return <p>Item Not Found</p>;
        }
    }

    render(){
        return (
            <>
                
                {this.props.item ? <> <h2>{this.props.item.name}</h2> {this.infoCard()}  </>: <h2>Loading</h2> }
            </>
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