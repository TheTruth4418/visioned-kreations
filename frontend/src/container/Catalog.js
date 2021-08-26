import { Component } from "react"
import { connect } from "react-redux"
import { getItems } from "../actions"
import CatalogSection from "./CatalogSection";
class Catalog extends Component{

    componentDidMount(){
        this.props.getItems()
    }

render(){
    let catalogArr = [];
    if(this.props.items){
        catalogArr = Object.entries(this.props.items).map((index) => <>
            <CatalogSection category={index[1]}/>
        </>)
    }
 
    return (
        <>
            <div className="catalog-container">
                {catalogArr}
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