import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
var dummyDat=[{ taskText: "Catch 'em1 all", completed: false },{ taskText: "Catch 'em2 all", completed: false },{ taskText: "Cat3ch 'em all", completed: false },{ taskText: "Catch4 'em all", completed: false }];


class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }
  componentDidMount(){
      this.setState({todos:dummyDat});
  }
  addTodo(task){
    //var bound=this
    console.log(task)
    var newtask={
      taskText:task,
      completed:false
    }
    var array= this.state.todos
    array.push(newtask)
    this.setState({todos:array})
  }
  removeTodo(index){
    var removal=this.state.todos;
    removal.splice(index,1);
    this.setState({todos:removal});
  }
  render(){
    return(
      <div>
      <InputLine submit={this.addTodo}/>
      <TodoList todoXClick={this.removeTodo} todos={this.state.todos}/>
      </div>
    )
  }
}
export default TodoApp;
