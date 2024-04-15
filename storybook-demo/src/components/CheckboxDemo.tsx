import { Heading, Checkbox,  Text} from "@chakra-ui/react"


interface Props {}
function CheckboxDemo(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props
        return (
            <div>
<Heading 
as="h3"         
marginLeft="50px"
color={{base: 'black', md: 'blueviolet', lg: 'darkgoldenrod'}}>
    Checkbox
    </Heading>
    <Text ml="50px">This checkbox can be unchecked, it is checked by default</Text>
<Checkbox ml="50px" padding="10px"
defaultChecked>{import.meta.env.VITE_API_URL}</Checkbox>
</div>
)
}
export default CheckboxDemo