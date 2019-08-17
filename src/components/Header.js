import React from 'react';
import app from '../base';

const Header = () => {
  return(
    <div className="header">
      <h1>incipit</h1>
      <h3>A Writing Prompt Generator</h3>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  )
}

export default Header
