import React from 'react'

class AddPrompt extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newP: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      newP: e.target.value
    })
  }

  addNewPrompt = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/prompts", {
      method: 'POST',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({prompt: this.state.newP})
  })
    .then(resp => resp.json())
    .then(console.log("data added"))
  }

  render(){
    return(
      <div className="newPrompt">
      {this.state.newP}
          <form onSubmit={this.addNewPrompt}>
            <label>Add your prompt</label>
            <textarea
              value={this.state.newP}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn newPromptBtn">submit</button>
          </form>

      </div>
    )
  }

}


  export default AddPrompt
