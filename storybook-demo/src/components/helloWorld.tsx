import { Heading, Checkbox, ListItem, Badge,OrderedList, Container, Box, SimpleGrid, Grid, GridItem, Divider} from "@chakra-ui/react"
import Circle from "../stories/Circle"
interface Props {}

function HelloWorld(props: Props) {
    const {} = props

    return (
        <div>
            {/* responsive colors to screen width */}
            <Heading m="2px" maxWidth="4xl" py="px" color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}>Hello World - you can see this app on</Heading>
            <Checkbox m="10px" defaultChecked>{import.meta.env.VITE_API_URL}</Checkbox>
            {/* the div will show up as a section in the DOM */}
         <Container as="section">
            <p>The app demos</p>
            <Badge>
            <OrderedList spacing='4' m='20px'>
                <ListItem>React version 19</ListItem>
                <ListItem>Vite instead of Create React App</ListItem>
                <ListItem>Storybook version 7</ListItem>
                <ListItem>Chakra UI version 2</ListItem>
            </OrderedList>
            </Badge>
            <Box m="20px">
          Storybook Circle and Chakra simple grid layout
          <SimpleGrid columns={3} spacing={100} bg="blue.50">
            <Circle variant="red"/>
            <Circle variant="green"/>
            <Circle variant="yellow"/>
            </SimpleGrid>
            <Divider/>
            Custom grid add custom styles with individual grid items
            <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
                <GridItem  bg="red">
            <Circle/>
            </GridItem>
            <GridItem  bg="red">
            <Circle/>
            </GridItem>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            </Grid>
            </Box>
            </Container>
            </div>
    )
}

export default HelloWorld
