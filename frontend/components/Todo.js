import React from 'react'

export default class Todo extends React.Component {
  render() {
    
    const {todo}=this.props;
    return (
     <div>
      {todo.visible &&   <div onClick={()=>this.props.toggleTodo(todo.id)}>
        <p>{todo.name} {todo.completed?"✅":""}</p>
      </div>}
     </div>
    )
  }
}
