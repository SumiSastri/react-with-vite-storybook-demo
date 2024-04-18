import { Circle } from "@chakra-ui/react"

interface Props {
    variant?: "black "|'green' | 'yellow'| 'red'
}

function ChakraCircle({variant = "black "}: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = variant

    return (
        <div>
            <Circle
            size='75px' bg={variant}      
            />
        </div>
    )
}

export default ChakraCircle
