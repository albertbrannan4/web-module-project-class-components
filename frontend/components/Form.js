import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state={
      currentTodo:''
    }
  }

  handleChanges =e=>{
    this.setState({...this.state,
      currentTodo:e.target.value
    })
    
  }

  submit = e=>{
    e.preventDefault();
   this.props.addTodo(this.state.currentTodo)
   this.setState({
    currentTodo:''
   })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type='text' name='currentTodo' value={this.state.currentTodo}  onChange={this.handleChanges}/>
          <input type='submit' value='Add Todo'/>
        </form>
      </div>
    )
  }
}
