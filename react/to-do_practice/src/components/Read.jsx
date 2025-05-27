import React from 'react'

const Read = (props) => {
    const todo=props.todo;
    const settodo=props.settodo;
    const rendertitle = todo.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })
  return (
    <>
    <h2>Pending Tasks</h2>
    <ol>{rendertitle}</ol>
    </>
  )
}

export default Read