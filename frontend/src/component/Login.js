import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLogin} from '../actions';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchUser } from '../actions';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  componentDidMount(){
    if(this.props.loggedIn){
    <Redirect to="/" />
    alert("You are already logged in")
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <input name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/><br/>

        <label>Password</label>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const MSTP = state => {
  return {
      loggedIn: state.currentUser != undefined
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLogin: userObj => dispatch(fetchLogin(userObj)),
  fetchUser: () => dispatch(fetchUser())
})

export default connect(MSTP, mapDispatchToProps)(Login);