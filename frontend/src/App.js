import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import NavBar from './container/NavBar';
import { Component } from 'react';
import { fetchUser, getItems } from './actions';
import { connect } from 'react-redux';
import './styleSheets/index.css'

class App extends Component{

  componentDidMount = () => {
    this.props.fetchUser()
  }


  render(){
  return (
    <Router>
      {<NavBar/>}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  getItems: () => dispatch(getItems())
})

export default connect(null, mapDispatchToProps)(App);
