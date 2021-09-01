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
        let count = 1
        catalogArr = Object.entries(this.props.items).map((ele,index) => <>
            <CatalogSection category={ele[1]} key={count+=1}/>
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