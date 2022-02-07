import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Services from './components/pages/Services/Services.js';
import About from './components/pages/About/About.js';
import Contact from './components/pages/Contact/Contact.js';
 

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/Services" name="Services Page" component = {Services} />
			<Route exact path="/About" name="About Page" component = {About} />
			<Route exact path="/Contact" name="Contact Page" component = {Contact} />
			 
			
			 
		</div>
	</Router>
    );
  }
}

export default App;
