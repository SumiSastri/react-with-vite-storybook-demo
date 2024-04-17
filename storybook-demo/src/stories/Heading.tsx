import { Heading} from "@chakra-ui/react"

interface ChakraHeadingProps {
    color?: string;
    backgroundColor?: string;
  }

  export const ChakraHeading = ({
    backgroundColor,
    color,
  }: ChakraHeadingProps) => {
    return (
        <div>
            <Heading
            as='h1'
            backgroundColor={backgroundColor}
            color={color}
            >Chakra-Storybook h1 heading</Heading>
            </div>
    )
}

export default ChakraHeading