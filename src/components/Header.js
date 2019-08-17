import React from 'react';
import app from '../base';

class Header extends React.Component {

//   logout = (e) => {
//     e.preventDefault();
//     app.auth().signOut()
//     .then( success => {
//    console.log(success)
// }).catch( error => {
//   console.log(error)
// });
//   }

  render(){
  return(
    <div className="container-fluid header">
      <h1>incipit</h1>
      <h3>A Writing Prompt Generator</h3>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  )
}
}

export default Header
