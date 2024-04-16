import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";

export default function GridLayoutDemo() {

  return (
    <div>
    <Heading as="h4">Grid Layout Demo</Heading>
    <Text fontSize="xl">The grid props like columns, spacing and minimum Child Width can be used</Text>
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      
      <Box bg="white" height="200px" border="1px solid"borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid" borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid"borderRadius="12px"></Box>
      <Box bg="white" height="200px" border="1px solid"borderRadius="12px"></Box>
    </SimpleGrid>
    </div>
  )
}