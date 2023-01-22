import React from 'react';
import {Box,Button ,Text,Center,SimpleGrid,Divider } from '@chakra-ui/react'
import Link from "next/link"
const Footer1 = () => {
  return (
   <Box mt={5} w="100%" backgroundColor="#37475A" >
       
        <Center>
        <SimpleGrid columns={1} p="15px" >
        <Link href="/"><Text fontSize="13px" color="#FFFF">Back to Top</Text></Link>
        </SimpleGrid>
        </Center>
   </Box>
  )
}

export default Footer1