import { UnlockIcon } from "@chakra-ui/icons"
import {   Heading, FormControl,
    FormLabel, ButtonGroup, Button,   useToast,
    // FormErrorMessage,
    FormHelperText, Input, Textarea, Radio, RadioGroup, Divider,Flex } from '@chakra-ui/react'

import CheckboxDemo from './CheckboxDemo'

interface Props {}

function FormDemo(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props
    const savePopUp = useToast()

    const fireSavePopUp = () => {
      savePopUp({
      title: 'Your data is saved and locked',
      description: "Once saved data can not be changed do not click the Next button if this data is incorrect",
      duration: 5000,
      isClosable: true,
      position: 'top',
      status: 'warning',
      icon: <UnlockIcon />,
    })
    }

    return (
        <div>
            <Heading as='h1'>
        Chakra Form Demo - input, text area and radio buttons
    </Heading>
<Flex m='20px' gap='4' wrap="wrap">
<FormControl>
<FormLabel>First Name</FormLabel>
<Input border="solid black" placeholder='Your first name' />
<FormHelperText>Type your first name min 2 alphabets, symbols and numbers are not allowed</FormHelperText>
     </FormControl>
<Divider/>

<FormControl>
<FormLabel>Your message</FormLabel>
<Textarea border="solid black" placeholder='This is a text box for you to type your message ' />
<FormHelperText>Type your message here</FormHelperText>
</FormControl>
<Divider/>

<FormControl>
<FormLabel>Choose an answer</FormLabel>
  <RadioGroup border="solid black" padding='12px'>
        <Radio margin='10px' value='yes'>Yes</Radio>
        <Radio margin='10px'value='no'>No</Radio>
        <Radio margin='10px'value='maybe'>Not sure</Radio>
        </RadioGroup>
        <Divider/>
        <FormHelperText>You can only select one option</FormHelperText>
        </FormControl>
        <CheckboxDemo/>
        <Divider/>
        <ButtonGroup spacing='2'>
      <Button onClick={fireSavePopUp}variant='solid' colorScheme='blue'>
        Save
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Next
      </Button>
    </ButtonGroup>
        </Flex>
        
        </div>
 
)
}
export default FormDemo