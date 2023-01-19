import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
const todoList= [
  {
    name: 'Organize Garage',
    id: 1528817077286, 
    completed: false,
    visible:true
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
    visible:true
  }
]
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoList: todoList
    }
  }

  addTodo =(todo)=>{
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed:false,
      visible:true
    }
    this.setState({...this.state, todoList:[...this.state.todoList,newTodo]})
  }

  toggleTodo = id =>{
    this.setState({
      ...this.state, 
      todoList: this.state.todoList.map(todo=>{
        if(todo.id === id){
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    })
  }

  hideCompleted = () =>{
    this.setState({
      ...this.state, 
      todoList: this.state.todoList.map(todo=>{
        if(todo.completed===true){
          return {...todo, visible: !todo.visible}
        }
        return todo;
      })
    })
  }

  

  render() {
    const {todoList} = this.state;
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todoList={todoList} toggleTodo={this.toggleTodo}/>
        <Form addTodo={this.addTodo} hideCompleted={this.hideCompleted}/>
      </div>
    )
  }
}
