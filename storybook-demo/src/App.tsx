import { useState } from 'react'

// styles
import { Card, Button, Divider, Box, Text, Flex, Spacer, VStack, Input, Textarea, Radio, RadioGroup } from '@chakra-ui/react'

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
   <h2>Chakra Flex layouts - vertical stack with spacer</h2>
<Flex bg="gray" justify="space-evenly" gap='2'>
  <VStack>
<p>adding linear gradient and color transitions</p> 
<Box flexGrow='1' w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
<p>adding radial gradient and color transitions</p>
<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />
<p>adding the text gradient</p>
</VStack>
<Spacer/>
<Text
flexGrow='1'
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="xl"
>
  Straight out of Chakra UI Style Props docs
</Text> 
<Card>

<Input  placeholder='Basic usage' />
<Textarea placeholder='Here is a sample placeholder' />

  <RadioGroup>
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
        <Radio value='3'>3</Radio>
        </RadioGroup>


</Card>
</Flex>
        </Card>
    
      </div>
  )
}

export default App
