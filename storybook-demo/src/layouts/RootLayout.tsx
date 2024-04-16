import { Outlet } from "react-router-dom"
import { Grid, GridItem } from "@chakra-ui/react"
import RightNavBar from "../components/RightNavBar"
import TopNavBar from "../components/TopNavBar"

export default function RootLayout() {
  return (
    <div>
      <TopNavBar/>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* right nav - styling with Grid is done on the grid item*/}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }} 
        bg="red.400"
        // on small screens 100vh does not work well
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <RightNavBar />
      </GridItem>

      {/* main content & navbar gridItem needs breakpoints to be manually defined*/}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        p="40px"
      >
        <Outlet />
      </GridItem>
    </Grid>
    </div>
  )
}