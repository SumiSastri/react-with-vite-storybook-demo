import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { LinkIcon, CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"

export default function RightNavBar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
      <NavLink to='chakra-basics-demo'>
          <ListIcon as={LinkIcon} color="white" />
          Chakra basics
        </NavLink>
        </ListItem>

        <ListItem>
      <NavLink to='chakra-lists-demo'>
          <ListIcon as={LinkIcon} color="white" />
        Lists Demo
        </NavLink>
        </ListItem>
   
        <ListItem>
        <NavLink to='chakra-flexlayout-demo'>
          <ListIcon as={LinkIcon} color="white" />
     Flex Layout Demo
        </NavLink>
        </ListItem>

        <ListItem>
        <NavLink to='chakra-gridlayout-demo'>
          <ListIcon as={LinkIcon} color="white" />
     Grid Layout Demo
        </NavLink>
        </ListItem>

        <ListItem>
        <NavLink to='chakra-card-demo'>
          <ListIcon as={LinkIcon} color="white" />
    Card Demo
        </NavLink>
        </ListItem>

        <ListItem>
        <NavLink to='chakra-form-demo'>
          <ListIcon as={LinkIcon} color="white" />
   Form Demo
        </NavLink>
        </ListItem>

        {/* <ListItem>
        <NavLink to='chakra-gridlayout-demo'>
          <ListIcon as={LinkIcon} color="white" />
     Grid Layout Demo
        </NavLink>
        </ListItem> */}
        
        <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="create">
          <ListIcon as={EditIcon} color="white" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  )
}