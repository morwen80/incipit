import React from 'react';
import app from '../base';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className="container-fluid header">
    <nav >
      <NavLink activeClassName="is-active" to='/' exact={true} > <h1 className="brand">incipit</h1> </NavLink>
    </nav>
    <h2>&#123; A Writing Prompt Generator &#125;</h2>
    <button className="logoutBtn btn " onClick={() => app.auth().signOut()}>Logout <i className="fas fa-sign-out-alt"></i></button>

    </div>
  )
}




export default Header
