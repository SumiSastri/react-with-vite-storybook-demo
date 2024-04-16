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
import { useLoaderData } from "react-router-dom"

// FIXME: change this to a tsx file and figure out types
// Register loader at component level on routes and router
export default function Dashboard() {
  const toDos = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
            {toDos && toDos.map((toDo)=>(
        <Card key={toDo.id} borderTop="8px" borderColor="yellow.400" bg="white">
          <CardHeader color="gray.700">
            <Flex gap={5}>
              <Box w="50px" h="50px">
                <Text>To Dos</Text>
              </Box>
              <Box>
                <Heading as="h3" size="sm">Job:  {toDo.title}</Heading>
                <Text>Completed by: {toDo.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody>
            <Text>What needs to be done:</Text>
            <Text color="gray.500">{toDo.description}</Text>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
       ))}
    </SimpleGrid>
  )
}

