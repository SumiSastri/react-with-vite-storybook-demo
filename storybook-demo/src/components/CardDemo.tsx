import { Card, Stack, Heading, Text, Image, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {}

const customButtonStyle = {
    borderRadius: "8px",
    borderColor:'yellow',
    margin: "1em",
    fontSize: "1em",
    fontWeight: "bold",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "border-color 0.25s",
    color: 'darkmagenta',
      ':hover': {
        color: 'pink.500',
      },
      ':focus-visible': {
        outline: '4px auto -webkit-focus-ring-color',
      },
  }

function CardDemo(props: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = props
    const [count, setCount] = useState(0)

    return (
        <div>
<Card maxW='sm'>
  <CardBody>
  <Heading as="h3">Card Demo with stateful and custom styled button</Heading>
    <Image
      src='/assets/dr-who.png'
      alt='David Tenant as Dr Who a limited edition poster'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text>
       This Dr Who poster with David Tenant is a limited print only 5 on sale!
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button sx={customButtonStyle} onClick={() => setCount((count) => count + 1)}>Add to cart {count}</Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Divider/>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='/assets/Batman.png'
    alt='A batman cartoon as a screensaver'
  />
  <Stack>
    <CardBody>
    <Heading as="h4">Horizontal layout</Heading>

      <Text py='2'>
       Batman screen saver
      </Text>
    </CardBody>

    <CardFooter>
    <ButtonGroup spacing='2'>
      <Button sx={customButtonStyle} onClick={() => setCount((count) => count + 1)}>Add to cart {count}</Button>
    </ButtonGroup>
  </CardFooter>
  </Stack>
</Card>
</div>
)
}

export default CardDemo