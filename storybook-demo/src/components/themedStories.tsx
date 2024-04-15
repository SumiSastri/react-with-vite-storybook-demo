import { Card, Heading, Text } from "@chakra-ui/react"

interface Props {}

function ThemedStories(props: Props) {
    const {} = props

    return (
        <div><Card>This component uses ThemedStories
            <Heading color="brand.500">Theme 1 Heading</Heading>
            <Text color="brand.200">Theme 1 text</Text>
        </Card><Card>
                <Text fontFamily="satsumas.xl" fontWeight="satsumas.medium" color="satsumas.branding.colors.orage.300">Theme 2</Text>
                <Text fontFamily="unionJackBrand.xl" fontWeight="unionJackBrand.medium" color="unionJackBrand.branding.colors.blue.300">Theme 3</Text>
            </Card></div>
    )
}

export default ThemedStories
