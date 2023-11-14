import { useState } from 'react'

// styles
// import './App.css'
// import './scss/main.scss'
import { Card, Button, Divider, Box, Text } from '@chakra-ui/react'

const customButtonStyle = {
  borderRadius: "8px",
  borderColor:'yellow',
  margin: "1em",
  fontSize: "1em",
  fontWeight: "bold",
  fontFamily: "inherit",
  cursor: "pointer",
  transition: "border-color 0.25s",
  color: 'darkmagenta',
    ':hover': {
      color: 'pink.500',
    },
    ':focus-visible': {
      outline: '4px auto -webkit-focus-ring-color',
    },
}

// components
import HelloWorld from './components/helloWorld'
// import { Button } from './stories/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Card>
             <HelloWorld/>
   <Button sx={customButtonStyle} onClick={() => setCount((count) => count + 1)}>Chakra Stateful Button ... click to change counter number {count}</Button>
   <Divider/>

<p>adding linear gradient and color transitions</p> 
<Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />

<p>adding radial gradient and color transitions</p>
<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

<p>adding the text gradient</p>
<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
  Straight out of Chakra UI Style Props docs
</Text> 
        </Card>
      </div>
  )
}

export default App
