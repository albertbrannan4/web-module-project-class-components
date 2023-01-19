import React from 'react'
import TodoList from './TodoList';
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
      todoList: todoList
    }
  }
  render() {
    const {todoList} = this.state;
    return (
      <div>
        <TodoList todoList={todoList}/>
      </div>
    )
  }
}
