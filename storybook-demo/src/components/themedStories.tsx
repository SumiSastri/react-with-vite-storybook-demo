import { Card, Heading, Text,Box, SimpleGrid, Grid, GridItem, Divider } from "@chakra-ui/react"
import Circle from "../stories/Circle/Circle"
interface Props {}

function ThemedStories(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props

    return (
        <div><Card>This component uses ThemedStories
            <Heading color="brand.500">Theme 1 Heading</Heading>
            <Text color="brand.200">Theme 1 text</Text>
        </Card><Card>
                <Text fontFamily="satsumas.xl" fontWeight="satsumas.medium" color="satsumas.branding.colors.orage.300">Theme 2</Text>
                <Text fontFamily="unionJackBrand.xl" fontWeight="unionJackBrand.medium" color="unionJackBrand.branding.colors.blue.300">Theme 3</Text>
            </Card>
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

            
            </div>
    )
}

export default ThemedStories
