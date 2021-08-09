import { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";

class Home extends Component{

    render(){
        let user = this.props.currentUser
        return (
            <div>
                {/*user.name ? <p>{`Welcome ${user.name}`}</p> : <Login/>*/}
                <p>Welcome</p>
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