import { Flex, Heading, Avatar, AvatarBadge, Text, Button, Spacer, HStack,   useToast,  } from "@chakra-ui/react"

export default function TopNavBar() {
  const logOutToast = useToast()

  return (
    // Everything inside the flex component is laid out with flexbox
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Demo Page List</Heading>
      {/* spacer shifts all the text to the left in flexbox */}
      <Spacer />
      <HStack spacing="20px"> 
      <Avatar name="batman" src="/assets/Batman.png">
          <AvatarBadge width="1.3em" bg="teal.500">
          </AvatarBadge>
        </Avatar>
        <Text>Batman you are logged in</Text>
        <Button 
         onClick={() => logOutToast({
          title: 'Batman',
          description: "You are successfully logged out",
          duration: 5000,
          isClosable: true,
          position: 'top',
          status: 'info',
          
        })}
        colorScheme="pink">Logout</Button>
      </HStack>
    </Flex>
  )
}