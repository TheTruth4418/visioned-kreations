import { connect } from "react-redux"
import { getItems } from "../actions"
import CatalogSection from "./CatalogSection";
function Catalog(props){
    let catalogArr = [];
    if(props.items){
        let count = 1
        catalogArr = Object.entries(props.items).map((ele,index) => <>
            <CatalogSection category={ele[1]} key={count+=1}/>
        </>)
    }
    console.log(props.items)
    return (
        <>
            <div className="catalog-container">
                {catalogArr}
            </div>
        </>
    )
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