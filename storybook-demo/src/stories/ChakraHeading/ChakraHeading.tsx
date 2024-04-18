import { Heading} from "@chakra-ui/react"

interface ChakraHeadingProps {
    color?: string;
    backgroundColor?: string;
    variant?: 'small' | 'medium' | 'large'
    margin?: string;
    padding?: string;
  }

  export const ChakraHeading = ({
    backgroundColor,
    color,
    ...props
  }: ChakraHeadingProps) => {
    return (
 
            <Heading
            backgroundColor={backgroundColor}
            color={color}
            {...props}
            >Chakra-Storybook h1 heading</Heading>
     
    )
}

export default ChakraHeading