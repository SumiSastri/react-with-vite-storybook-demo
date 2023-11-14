import { Heading, Checkbox, ListItem, Badge,OrderedList, Container} from "@chakra-ui/react"
interface Props {}

function HelloWorld(props: Props) {
    const {} = props

    return (
        <div>
            <Heading my="30px" maxWidth="4xl" py="px">Hello World - you can see the app on</Heading>
            <Checkbox defaultChecked>{import.meta.env.VITE_API_URL}</Checkbox>
            {/* the div will show up as a section in the DOM */}
         <Container as="section">
            <p>The app demos</p>
            <Badge>
            <OrderedList>
                <ListItem>React version 19</ListItem>
                <ListItem>Vite instead of Create React App</ListItem>
                <ListItem>Storybook version 7</ListItem>
                <ListItem>Chakra UI version 2</ListItem>
            </OrderedList>
            </Badge>
            </Container>
            </div>
    )
}

export default HelloWorld
