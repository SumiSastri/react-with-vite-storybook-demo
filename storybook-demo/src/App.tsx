import { useState } from 'react'

// styles
import './App.css'
import './scss/main.scss'
import { Card, Button, Divider } from '@chakra-ui/react'

// components
import HelloWorld from './components/helloWorld'
// import { Button } from './stories/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Card>
             <HelloWorld/>
   <Button>Chakra Button</Button>
   <Divider/>
   <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </Card>
      </div>
  )
}

export default App
