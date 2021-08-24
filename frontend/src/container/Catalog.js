import { Component } from "react"
import { connect } from "react-redux"
import { getItems } from "../actions"
import CatalogItem from "./CatalogItem";
import {NavLink } from "react-router-dom/cjs/react-router-dom.min";
class Catalog extends Component{

    componentDidMount(){
        this.props.getItems()
    }

render(){
    let notesArr;
    if(this.props.items){
        notesArr = this.props.items.map((item) => <>
        <div className="catalog-item">
            <CatalogItem item={item}/>
        </div>
        </>)
    }

    return (
        <>
            <div className="catalog-container">
                {notesArr}
            </div>
        </>
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

export default connect(MSTP,MDTP)(Catalog)