import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button
} from "@chakra-ui/react"


export default function Dashboard() {

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
        <Card  borderTop="8px" borderColor="yellow.400" bg="white">
          <CardHeader color="gray.700">
            <Flex gap={5}>
              <Box w="50px" h="50px">
                <Text>To Dos</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Job:</Heading>
                <Text>Completed by:</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>What needs to be done:</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
    </SimpleGrid>
  )
}

