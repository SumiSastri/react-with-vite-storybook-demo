import { useState } from 'react'

// styles
import {Button, Divider, Input, Textarea, Radio, RadioGroup } from '@chakra-ui/react'

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
import ThemedStories from './components/themedStories'

// import { Button } from './stories/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
   <Button sx={customButtonStyle} onClick={() => setCount((count) => count + 1)}>Chakra Stateful Button ... click to change counter number {count}</Button>
   <Divider/>
<Input  placeholder='Basic usage' />
<Textarea placeholder='Here is a sample placeholder' />

  <RadioGroup>
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
        <Radio value='3'>3</Radio>
        </RadioGroup> 
    <ThemedStories/>
      </div>

  )
}

export default App
