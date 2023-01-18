import React from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  InputGroup,
  Input
} from '@chakra-ui/react'

export default function YourOrders() {
  return (
    <Box 
    border='2px solid black' 
    width='60%' 
    height='auto' 
    textAlign='center'
    margin='auto'
    paddingBottom={5}>
      <Flex minWidth='max-content' alignItems='center' gap='2' >
        <Text fontSize='sm'>Your Account ›</Text>
        <Text fontSize='sm' color='#c45500'>Your Orders</Text>
      </Flex>
      <Box>
        <Flex minWidth='max-content' alignItems='center' gap={['0','59','150','380']}>
          <Text fontSize={['md', 'lg', 'xl', '3xl']}>Your Orders</Text>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Stack spacing={4}>
              <InputGroup>
                <Input placeholder='Search all orders' width={['380','','','']} size='sm' />
              </InputGroup>
            </Stack>
            <Button  size='sm' borderRadius={50} backgroundColor='black' color='white'>Search Orders</Button>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex color='#007185' fontSize='sm' gap={7} paddingLeft={10} paddingBottom={2}>
          <Text>Orders</Text>
          <Text color='black' fontWeight='bold'>Buy Again</Text>
          <Text >Not Yet Shipped</Text>
          <Text >Cancelled Orders</Text>
        </Flex>
      </Box>
      <hr/>
      <Box  marginTop={7}>
        <Text fontSize='14.5px'>There are no recommended items for you to buy again at this time. Check <span style={{color:"#007185"}}>Your Orders</span> for items you previously purchased.</Text>
      </Box>
    </Box>
  )
}
