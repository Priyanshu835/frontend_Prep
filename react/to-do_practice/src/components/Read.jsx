import React from 'react'

const Read = (props) => {
    const todo=props.todo;
    const settodo=props.settodo;
    const DeleteHandler=(id)=>{
      let filtertodo=todo.filter(todo => todo.id != id)
      settodo(filtertodo);
    }
    const rendertitle = todo.map((todo) => {
    return <li key={todo.id}>{todo.title} | <span onClick={()=>DeleteHandler(todo.id)}>Delete</span></li>
  })
  return (
    <>
    <h2>Pending Tasks</h2>
    <ol>{rendertitle}</ol>
    </>
  )
}

export default Read