import ChakraCircle from "./ChakraCircle"

interface Props {}

function TrafficLights(props: Props) {
    const {} = props

    return (
      // chakra styles can be mixed with styled components
        <div style={{display: 'flex', flexDirection: 'column', gap: '10', border: '1px solid black', padding: '2px', margin: '2px', width: 'max-content', background: "gray" }}>
<ChakraCircle variant="red"/>
<ChakraCircle variant="yellow"/>
<ChakraCircle variant="green"/>
        </div>
        
    )
}
export default TrafficLights
