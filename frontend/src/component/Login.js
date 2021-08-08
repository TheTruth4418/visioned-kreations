import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLogin} from '../actions';

class Login extends Component {
  state = {
    email: "",
    password: ""
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

const mapDispatchToProps = dispatch => ({
  fetchLogin: userObj => dispatch(fetchLogin(userObj))
})

export default connect(null, mapDispatchToProps)(Login);