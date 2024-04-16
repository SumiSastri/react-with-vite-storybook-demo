import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function TopNavBar() {
  return (
    // Everything inside the flex component is laid out with flexbox
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Demo Page List</Heading>
      {/* spacer shifts all the text to the left in flexbox */}
      <Spacer />
      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px">Hi John Doe</Box>
        <Text>You Logged in</Text>
        <Button colorScheme="pink">Logout</Button>
      </HStack>
    </Flex>
  )
}