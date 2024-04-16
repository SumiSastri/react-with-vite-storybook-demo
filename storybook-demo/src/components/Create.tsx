import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  Input, 
  Textarea, 
  Button, 
  Checkbox,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { Form } from 'react-router-dom'
export default function Create() {

  return (
    <Box maxW="480px">
      {/* register post method and the route */}
      <Form method="post" action="/create">
      <Heading as='h4'>
       Create a new to-do item
    </Heading>
    <Divider/>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea 
            placeholder="Enter a detailed description for your task..." 
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox 
            name="isPriority" 
            colorScheme="pink"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Make a priority task</FormLabel>
        </FormControl>

        <Button type="submit">submit</Button>
      </Form>
    </Box>
  )
}
