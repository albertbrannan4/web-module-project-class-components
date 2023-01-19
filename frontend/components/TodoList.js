import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
  render() {
    const {todoList}=this.props;
    return (
      <div>
        {todoList.map(todo=>{
          return <Todo key={todo.id} toggleTodo={this.props.toggleTodo} todo={todo}/>
        })}
      </div>
    )
  }
}
