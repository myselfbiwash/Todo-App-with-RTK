import { useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
