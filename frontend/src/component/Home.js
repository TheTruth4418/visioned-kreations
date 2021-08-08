import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component{

    render(){
        let user = this.props.currentUser
        return (
            <>
                {user.name ? <p>{`Welcome ${user.name}`}</p> : <p>Not Logged in</p>}
            </>
        )
    }

}

const MSTP = state => {
    return{
        currentUser: state.currentUser
    }
}



export default connect(MSTP)(Home)