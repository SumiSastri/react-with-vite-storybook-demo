import { 
  ChatIcon, 
  CheckCircleIcon, 
  EmailIcon, 
  StarIcon, 
  WarningIcon 
} from '@chakra-ui/icons'
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  List, 
  ListItem, 
  ListIcon,
  useColorModeValue,
  TabIndicator,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Profile() {

  const colors = useColorModeValue(
    ['red.100', 'purple.100'],
    ['red.900', 'yellow.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]

  return (
    <Tabs mt="40px" p="20px"  size='lg' variant='enclosed' align='end' colorScheme="pink" onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'pink.400' }}>My Profile</Tab>
        <Tab _selected={{ color: 'white', bg: 'pink.400' }}>My ToDos</Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='red.900' borderRadius='1px' />
      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: test@email.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
