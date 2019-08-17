import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
 state = {
   hello: "Writer block? We hear ya! With INCIPIT you can generate a random prompt to inspire you or add your own prompt to help other writers out.",
   prompt: ''
 }



randomPrompt = (e) => {

    e.preventDefault();

    fetch('http://localhost:3000/prompts')
    .then(resp => resp.json())
    .then(data => this.setState({
        prompt: data[Math.floor(Math.random() * data.length)],
        hello: ""
      })
    )
  }



  render(){
    return(
      <div className="home container">

        <div className="btns">
          <button className="random btn btn-primary" onClick={this.randomPrompt}>random prompt</button>
          <Link to="/new"> <button className="btn btn-warning">add prompt</button> </Link>
        </div>
        <div className="row">
          <div className="main col-md-12 main">
            <div className="promptSpace">
              {this.state.hello}
              {this.state.prompt.prompt}
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Home
