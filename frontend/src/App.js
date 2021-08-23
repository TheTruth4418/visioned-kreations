import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import NavBar from './container/NavBar';
import ItemPage from './container/ItemPage';
import Cart from './container/Cart';
import Orders from './container/Orders.js'
import { Component } from 'react';
import { fetchUser, getItems } from './actions';
import { connect } from 'react-redux';
import './styleSheets/index.css'
import Confirmation from './container/Confirmation';

class App extends Component{

  componentDidMount = () => {
    this.props.fetchUser()
  }


  render(){
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/items" component={ItemPage}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/orders" component={Orders}/>
        <Route path="/orders/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
  }
}

const MSTP = state => {
  return {
    loggedIn: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  getItems: () => dispatch(getItems())
})

export default connect(MSTP, mapDispatchToProps)(App);
