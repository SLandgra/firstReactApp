import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
import axios from 'axios';
var dummyDat=[{ taskText: "Catch 'em1 all", completed: false },{ taskText: "Catch 'em2 all", completed: false },{ taskText: "Cat3ch 'em all", completed: false },{ taskText: "Catch4 'em all", completed: false }];

const dbUrl = "http://localhost:3000/db";
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
    // console.log(task)
    // var newtask={
    //   taskText:task,
    //   completed:false
    // }
    // var array= this.state.todos
    // array.push(newtask)
    // this.setState({todos:array})
    axios.post(dbUrl+'/add', {task})
    .then(function (response) {
      console.log(response)
      // Do whatever you want with the request's response in here
    })
    .catch(function (error) {
      console.log(error)
      // Do whatever you want in the event of an error in here
    });
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
