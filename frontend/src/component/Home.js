import { Component } from "react";
import { connect } from "react-redux";
import Catalog from "../container/Catalog";

class Home extends Component{

    render(){
        let user = this.props.currentUser
        return (
            <div>
                {user ? <p>{`Welcome ${user.name}`}</p> : <p>Welcome Guest!</p>}
                <Catalog/>
            </div>
        )
    }

}

const MSTP = state => {
    return{
        currentUser: state.currentUser
    }
}



export default connect(MSTP)(Home)