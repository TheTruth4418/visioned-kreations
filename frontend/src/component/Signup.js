import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postSignup} from '../redux/actions';

class Signup extends Component {
  state = {
    email:"",
    name: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Email</label>
        <input name='email' placeholder='email' value={this.state.email} onChange={this.handleChange} /><br/>

        <label>Name</label>
        <input name='name' placeholder='First NAme' value={this.state.name} onChange={this.handleChange} /><br/>

        <label>Password</label>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postSignup: userObj => dispatch(postSignup(Obj))
})

export default connect(null, mapDispatchToProps)(Signup);