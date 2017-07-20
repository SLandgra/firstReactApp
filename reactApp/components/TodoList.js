import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.js';

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
      {this.props.todos.map((item,index)=><Todo xClick={()=>this.props.todoXClick(index)} task={item}/>)}
      </ul>
    )
  }
}
export default TodoList;
