import { useState } from 'react'

function App() {

  const [username, setUsername] = useState("")
  const [age, setAge] = useState(1)

  return (
    <>
      <h1>User Data</h1>

      <form onSubmit={(e) => {e.preventDefault()}}>
        <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='Username'/>
        <input onChange={(e)=>{setAge(e.target.value)}} value={age} type="number" placeholder='Age' />
        <button>Submit</button>
      </form>

    </>
  )
}

export default App
