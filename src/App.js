import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import AddPrompt from './components/AddPrompt';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';


const App = () => {
  return (
    <AuthProvider>
    <Router>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />

        <PrivateRoute exact path='/new' component={AddPrompt} />
        <Route component={PageNotFound} />
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
