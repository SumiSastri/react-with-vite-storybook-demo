import { Heading, ListItem, Badge,OrderedList, Container, Text} from "@chakra-ui/react"

interface Props {}
function ListsDemo(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props

    return (
        <div>
<Container as="section">
    <Heading as='h1'>
        Chakra Badge with an Ordered List
    </Heading>
<Text>The app demos</Text>
<Badge>
<OrderedList fontSize="2em"spacing='4' m='20px'>
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
export default ListsDemo
