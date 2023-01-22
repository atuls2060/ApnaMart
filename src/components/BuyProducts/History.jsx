import React from 'react';
import Image from "next/image"
import {
    Flex,
    Box,
    Text
  } from '@chakra-ui/react'

import cart_history1 from "../../Images/cart_history1.png";
import cart_history2 from "../../Images/cart_history2.png";
import cart_history3 from "../../Images/cart_history3.png";
import cart_history4 from "../../Images/cart_history4.png";
import cart_history5 from "../../Images/cart_history5.png";
import cart_history6 from "../../Images/cart_history6.png";
import cart_history7 from "../../Images/cart_history7.png";

export default function History() {
  return (
    <Box 
    textAlign='center' 
    justifyContent='center' 
    alignItems='center' 
    padding={10}
    // border='2px solid black'
    paddingTop={0}
    >
        <Flex gap={2} textAlign='center' justifyContent='left' alignItems='center'>
            <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Your browsing history </Text>
            <Text fontSize={['xs', 'sm', 'md', 'md']} color="#007185">View or edit your browsing history</Text>
        </Flex>
        
        <Flex gap={2}>
            <Image src={cart_history1} width={120} height={100} alt="img"/>
            <Image src={cart_history2} width={120} height={100} alt="img"/>
            <Image src={cart_history3} width={120} height={100} alt="img"/>
            <Image src={cart_history4} width={120} height={100} alt="img"/>
            <Image src={cart_history5} width={120} height={100} alt="img"/>
            <Image src={cart_history6} width={120} height={100} alt="img"/>
            <Image src={cart_history7} width={120} height={100} alt="img"/>
        </Flex>
    </Box>
    
  )
}
