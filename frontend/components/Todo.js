import React from 'react'

export default class Todo extends React.Component {
  render() {
    
    const {todo}=this.props;
    console.log(todo)
    return (
      <div>
        <p>{todo.name} {todo.completed?"✅":""}</p>
      </div>
    )
  }
}
