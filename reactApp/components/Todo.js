import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      strike:this.props.task.completed
    };
  }
  click(e){
    e.preventDefault();
    this.setState({strike:!this.state.strike})
  }
  render(){
    return(
      <li><button onClick={(e)=>this.click(e)}>X</button> {this.state.strike? <strike> {this.props.task.taskText} </strike>: this.props.task.taskText}<button onClick = {this.props.xClick}>Remove</button> </li>
    )
  }
}
export default Todo;
