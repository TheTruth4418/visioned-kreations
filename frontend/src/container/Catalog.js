import { Component } from "react"
import { connect } from "react-redux"
import { getItems } from "../actions"
class Catalog extends Component{

    componentDidMount(){
        this.props.getItems()
    }

render(){
    let notesArr = []
    if(this.props.items){
     for(const [key,value] of Object.entries(this.props.items).sort()){
        notesArr.push(<div key={value.id} className="catalog">
                        <img src={require(`../images/${value.category}/${value.name}.png`).default} alt="" className={value.category} /><br/>
                        {value.name}<br/>{`Price $${value.price}`}
                      </div>)
        } 
    }
    return (
        <div className="catalog-container">
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