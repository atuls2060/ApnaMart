import { Image, Heading, HStack, Text, CloseButton, Box, VStack, Button } from '@chakra-ui/react'
import React from 'react'

const CheckoutItem = ({ url, title, removeItem, price,quantity,updateItem }) => {

    return (
        <HStack justifyContent="space-between">
            <HStack spacing="4">
                <Box width="50px" height="50px">
                <Image boxSizing='border-box' w="50px" src={url} width="100%" height="100%" overflow="hidden" />
                </Box>
                <VStack align="start">
                    <Heading noOfLines={1} size="sm">{title}</Heading>
                    <HStack>
                        <Text textAlign="left" color="#b12704">₹ {price}</Text>
                        <Button disabled={quantity===1} onClick={()=>updateItem(-1)} size="sm">-</Button>
                        <Text>{quantity}</Text>
                        <Button onClick={()=>updateItem(1)}  size="sm">+</Button>
                    </HStack>
                </VStack>
            </HStack>
            <CloseButton onClick={removeItem} />
        </HStack>
    )
}

export default CheckoutItem