// styles
import { Heading, Card,  Box, Text, Flex, Button, VStack, HStack} from '@chakra-ui/react'

interface Props {}
function FlexLayoutDemo(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props
        return (
                <Card>
<Heading as="h3">Basic flex </Heading>
<Text fontSize="xl">You can add wrap, justify, grow and other flex props to the Chakra Flex component</Text>
<Flex bg="gray.200" justify="space-evenly" gap='2' wrap="wrap">
    <Box w='150px' h='150px' bg='green'>1</Box>
    <Box w='150px' h='150px' flexGrow="1" bg='orange'>2</Box>
    <Box w='150px' h='150px' bg='red'>3</Box>
    <Box w='150px' h='150px' bg='blue'>4</Box>
    <Box w='150px' h='150px' flexGrow="2" bg='black'>5</Box>
    </Flex>
    <HStack spacing="20px"> 
    <Heading as="h4">The H(orizontal)Stack</Heading>
  <Text fontSize="xl">The HStack is the same layout as standard Flex which defaults to horizontal stacking</Text>
        <Box bg="gray.200" p="10px">Grey box</Box>
        <Text>Text in the HStack</Text>
      </HStack>
  <VStack>
  <Heading as="h4">The V(ertical)Stack</Heading>
  <Text fontSize="xl">The VStack always stacks vertically</Text>
<Text>adding linear gradient and color transitions</Text> 
<Box flexGrow='1' w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
<Text>adding radial gradient and color transitions</Text>
<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />
<p>adding the text gradient</p>
<Text
flexGrow='1'
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="xl"
>
  Straight out of Chakra UI Style Props docs
</Text>
</VStack>
</Card>
)
}
export default FlexLayoutDemo