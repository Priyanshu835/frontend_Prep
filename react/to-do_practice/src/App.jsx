import React from 'react'
import { useState } from "react";
import { nanoid } from 'nanoid'
import Read from './components/Read';
import Create from './components/create';
const App = () => {

  const [todo, settodo] = useState([{
    id : nanoid(),
    title : " kuch toh bnao",
    isCompleted : false
  }])

  return (
    <>
    <Create todo={todo} settodo={settodo}/>
    <hr />
    <Read todo={todo} settodo={settodo}/>
    </>
  )
}

export default App