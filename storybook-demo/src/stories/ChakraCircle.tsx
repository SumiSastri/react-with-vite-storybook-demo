import { Circle } from "@chakra-ui/react"

interface Props {
    variant?: "black "|'green' | 'yellow'| 'red'
}

function ChakraCircle({variant = "black "}: Props) {
    const {} = variant

    return (
        <div>
            <Circle
            size='200px' bg={variant}      
            />
        </div>
    )
}

export default ChakraCircle
