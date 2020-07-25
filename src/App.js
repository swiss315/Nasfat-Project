import React from 'react';
import Login from './components/Form/Login/index.jsx';
import Signup from './components/Form/Signup/index.jsx';
import Dashboard from './components/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';




class App extends React.Component {
  
 
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  }
}


export default App;
