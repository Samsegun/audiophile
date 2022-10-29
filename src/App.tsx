import { useState } from 'react'
import TestBtn from './components/button'

function App() {
  const [count, setCount] = useState(0)

  const clickHandler = () => setCount((count) => count + 20)

  return (
    <div className="App">
      <TestBtn count={count} clickHandler={clickHandler}/>
    </div>
  )
}

export default App
