import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      added: ''
    }
    this.change=this.change.bind(this)
    this.submit = this.submit.bind(this)
  }
  change(event){
    //event.preventDefault()
    this.setState({added:event.target.value})
  }
  submit(event){
    event.preventDefault()
    var words = this.state.added;
    this.props.submit(words)

  }
  render(){
    return(
      <form onSubmit={this.submit}>
      <input type="text" onChange={this.change}/> <input type="submit" value="submit"/>
      </form>
    )
  }
}
export default InputLine;
