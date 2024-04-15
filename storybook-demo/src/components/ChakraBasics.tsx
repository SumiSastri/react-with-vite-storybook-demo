import { Heading, Text} from "@chakra-ui/react"

interface Props {}

function ChakraBasics(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props

    return (
        <div>
            <Heading
            as="h1"
            marginLeft="50px"
            color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}
            >Chakra basics - headings and text</Heading>
            <Text ml="50px" color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}>This is a paragraph with style props</Text>
            {/* The as prop renders HTML on the DOM */}
            </div>
    )
}

export default ChakraBasics
