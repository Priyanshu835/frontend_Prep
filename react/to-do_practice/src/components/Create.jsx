import React from 'react'
import { useState } from "react";
import { nanoid } from 'nanoid'
const create = (props) => {
    const todo=props.todo;
    const settodo=props.settodo;
    const [title, settitle] = useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
    
        const newtodo= {
        id: nanoid(),
        title : title,
        isCompleted: false
        }
         settodo([...todo,newtodo])
    
    settitle("")
  }
  return (
    <>
    <h1>Create To-Do</h1>
    <form onSubmit={submitHandler}>
      <input
      value={title}
      onChange={(e)=>{settitle(e.target.value)}}
      placeholder='title'
      type="text" />
      <br />
      <button>Create</button>
    </form>
    </>
  )
}

export default create