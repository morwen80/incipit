import React from 'react'

class AddPrompt extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newP: '',
      writer: 'Anonymous'
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.key]: e.target.value
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
    body: JSON.stringify({prompt: this.state.newP, writer: this.state.writer})
  })
    .then(resp => resp.json())
    .then(console.log("data added"))
  }

  render(){
    return(
      <div className="newPrompt container">
          <form onSubmit={this.addNewPrompt}>
          <div className="form-group">

            <label> Add your prompt </label>
            <textarea
              className="form-control"
              value={this.state.newP}
              onChange={this.handleChange}
            />
          </div>
          <div>
          <label>Writer
            <input

              className="form-control input-lg"
              name="writer"
              placeholder="writer"
              value={this.state.writer}
              onChange={this.handleChange}
            />
          </label>
          </div>
            <button type="submit" className="btn newPromptBtn">submit</button>
          </form>

      </div>
    )
  }

}


  export default AddPrompt
