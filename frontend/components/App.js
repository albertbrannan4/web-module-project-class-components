import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
const todoList= [
  {
    name: 'Organize Garage',
    id: 1528817077286, 
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoList: todoList,
      hideCompleted:false
    }
  }

  addTodo =(todo)=>{
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed:false
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


  render() {
    const {todoList} = this.state;
    console.log(this.state.hideCompleted)
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todoList={todoList} toggleTodo={this.toggleTodo}/>
        <Form addTodo={this.addTodo}/>
        <button>Hide completed</button>
      </div>
    )
  }
}
