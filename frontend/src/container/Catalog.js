import { Component } from "react"
import { connect } from "react-redux"
import { getItems } from "../actions"
class Catalog extends Component{

componentDidMount(){
    this.props.getItems()
}

render(){
    let notesArr = []
    for(const [key,value] of Object.entries(this.props.items).sort()){
        notesArr.push(<li>{value.name}-{value.category}</li>)
    }
    return (
        <div className="catalog">
            <p>Catalog</p>
            {notesArr}
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

export default connect(MSTP,MDTP)(Catalog)