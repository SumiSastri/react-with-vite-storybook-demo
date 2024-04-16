import { Heading, Text} from "@chakra-ui/react"
function App() {
  return (
      <div>
<Heading
            as="h1"
            marginLeft="50px"
            color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}
            >Chakra and Storybook Demo App</Heading>
            <Text ml="50px" color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}>With React & Vite</Text>
      
      </div>

  )
}

export default App
