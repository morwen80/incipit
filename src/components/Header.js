import React from 'react';
import app from '../base';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <React.Fragment>
    <nav className="container-fluid header">
      <NavLink activeClassName="is-active" to='/' exact={true} > <h1 className="brand">incipit</h1> </NavLink>
    </nav>
    <h2>A Writing Prompt Generator</h2>
    <button className="logoutBtn btn btn-outline-danger" onClick={() => app.auth().signOut()}>Logout <i class="fas fa-sign-out-alt"></i></button>

    </React.Fragment>
  )
}




export default Header
