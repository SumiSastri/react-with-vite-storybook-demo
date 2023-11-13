import { useState } from 'react'
// styles
import './App.css'
import './scss/main.scss'
// components
import HelloWorld from './components/helloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="card">
             <HelloWorld/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
  )
}

export default App
