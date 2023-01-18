import React from 'react'
import {
    Box,
    Text,
  } from '@chakra-ui/react'
export default function Grocery() {
  return (
    <Box minWidth={95} border='2px solid black' margin='25px'>
        <Text fontSize={['md', 'lg', 'xl', '25px']} fontWeight='bold' marginBottom={5}>Discover</Text>
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Frequently repurchased in Grocery</Text>
        <Box></Box>
    </Box>
  )
}
