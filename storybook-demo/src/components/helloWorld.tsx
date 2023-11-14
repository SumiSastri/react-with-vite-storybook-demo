import { Heading, Checkbox, ListItem, Badge,OrderedList} from "@chakra-ui/react"
interface Props {}

function HelloWorld(props: Props) {
    const {} = props

    return (
        <div>
            <Heading>Hello World - the app is on</Heading>
            <Checkbox defaultChecked>{import.meta.env.VITE_API_URL}</Checkbox>
         
            <p>The app demos</p>
            <Badge>
            <OrderedList>
                <ListItem>React version 19</ListItem>
                <ListItem>Vite instead of Create React App</ListItem>
                <ListItem>Storybook version 7</ListItem>
                <ListItem>Chakra UI version 2</ListItem>
            </OrderedList>
            </Badge>
            </div>
    )
}

export default HelloWorld
