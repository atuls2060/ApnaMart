import React from 'react'
import {
    Flex,
    Text,
    Box,
  } from '@chakra-ui/react';

export default function shoppingcart() {
  return (
    <>
      <Box width="78%" height={400} border="2px solid black" display="flex" gap="10px" justifyContent="space-between">
          <Box width={80} height={100}>shopped
              <Box width="80%" height={150} border="2px solid black">1</Box>
              <Box width="80%" height={150} border="2px solid black">2</Box>
          </Box >
          <Box width="18%" height={100} border="2px solid red"> frequently purchased</Box>
          <Text>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</Text>
      </Box>
    </> 
  )
}
