import React from 'react'
import { Heading } from '@chakra-ui/react'
import Shoppingcart from './Shoppingcart'
import History from '../BuyProducts/History'
import TopPick from '../BuyProducts/TopPicks'
import Inspired from '../BuyProducts/Inspired'
import Supplies from '../BuyProducts/Supplies'
import { useCart } from 'react-use-cart';
import {
  Flex,
  Text,
  Box,
  Button
} from '@chakra-ui/react';
import Related from './Related';
import BabyProducts from './BabyProducts';
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  console.log(items)

  if (isEmpty) return (
    <>
      <Box
        bgColor='#EAEDED'
        width="100%"
        height='auto'
        // border="2px solid black" 
        display="flex"
        gap="10px"
        justifyContent="space-between"
        padding="20px">
        <Box
          width='78%'
          height='auto'
        // border="2px solid red"
        >
          <Box
            width="100%"
            height='auto'
            bgColor='white'
            // border="2px solid black"
            padding={5}
          >
            <Text
              fontSize={['md', 'lg', 'xl', '3xl']}
              fontWeight='600'
              marginBottom={1}
            >Your Amazon Cart is empty.
            </Text>
            <Flex justifyContent="space-between">
              <Text
                marginBottom={2}
                width='80%'
                fontSize='sm'
              >
                Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                Continue shopping on the <span style={{ color: '#007185' }}>Amazon.in homepage</span>, learn about <span style={{ color: '#007185' }}>today&apos;s deals</span>, or visit your <span style={{ color: '#007185' }}>Wish List</span>.
              </Text>
            </Flex>
            <hr />
          </Box>
          <Box
            bgColor='white'
            width="100%"
            height="auto"
            // border="2px solid black" 
            marginTop={5}
            padding={5}>
            <Text fontSize={['md', 'lg', 'xl', '3xl']} fontWeight='600' marginBottom={2}>Your Items</Text>
            <Flex
              gap={5}
              marginLeft={5}
              marginBottom={1}>
              <Text color='#007185'>No items saved for later</Text>
              <Text color='black'>Buy it again</Text>
            </Flex>
            <hr />
            <Box >No items to Buy again.</Box>
          </Box>
          <Box
            width="87%"
            height='auto'
            fontSize={'xs'}
            marginTop={5}
          // border="2px solid red"
          >
            <Text>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item&apos;s most recent price. Do you have a promotional code? We&apos;ll ask you to enter your claim code when it&apos;s time to pay.</Text>
          </Box>
        </Box >
        <Box
          width="21%"
          height='auto'
          // border="2px solid red"
          marginBottom={2}
        >
          {/* frequently purchased items */}
          <Box
            width="100%"
            height='auto'
            paddingTop={2}
            border="1px solid #DADDE0"
            bgColor='white'
            borderRadius={8}
          >
            <Box
              margin={5}
              marginTop={3}
            >
              <Text
                fontWeight='bold'
                fontSize="xl"
                marginBottom={2}
              >Frequently repurchased in Baby Products</Text>

            </Box>
            <Box>
              {BabyProducts.products.map((el) => (
                <Flex
                  // border="1px solid black"
                  margin={2}
                  marginBottom={5}
                  height='auto'
                  gap={4}
                  key={el.id}
                >
                  <Image src={el.image} width={90} height={10} alt="img" />
                  <Box
                  // border="1px solid red"
                  >
                    <Text color='#007185' fontSize='lg'>{el.title}</Text>
                    <Text> Ratings</Text>
                    <Text color='#007185' fontSize='xs'>{el.rating}</Text>
                    <Text fontSize='xs'>{el.prize}</Text>
                    <Button
                      fontSize='xs'
                      bgColor='white'
                      border='1px solid #DADDE0'
                      padding={2}
                      height={5}
                    >{el.buttontext}</Button>
                  </Box>

                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Supplies />
      <Inspired />
      <TopPick />
      <History />
    </>
  )

  return (
    <>
      <Box
        bgColor='#EAEDED'
        width="100%"
        height='auto'
        // border="2px solid black" 
        display="flex"
        gap="10px"
        justifyContent="space-between"
        padding="20px">
        <Box
          width='78%'
          height='auto'
        // border="2px solid red"
        >
          <Box
            width="100%"
            height='auto'
            bgColor='white'
            // border="2px solid black"
            padding={5}
          >
            <Text
              fontSize={['md', 'lg', 'xl', '3xl']}
              fontWeight='600'
              marginBottom={1}
            >Shopping Cart
            </Text>
            <Flex justifyContent="space-between">
              <Text
                color='#007185'
                marginBottom={2}
                onClick={() => emptyCart()}
                cursor="pointer"
              >
                Deselect all items
              </Text>
              <Text>
                Price
              </Text>
            </Flex>
            <hr />
            <Box
              // border="2px solid black"
              height='auto'
            >
              {items.map((el, index) => {
                return (
                  <Box marginBottom={5} key={index}>
                    <Box
                      // border="2px solid red"
                      height={200}
                      marginTop={5}
                      display="flex"
                      gap={5}
                      marginBottom={5}
                      key={index}
                    >
                      <Box
                        // border="2px solid blue"
                        flex="1"
                      >
                        <Image
                          src={el.url}
                          width={120}
                          height={120}
                          alt='img' />
                      </Box>
                      <Box
                        // border="2px solid blue"
                        flex="5"
                      >
                        <Flex justifyContent='space-between'>
                          <Text
                            fontSize='19px'
                            fontWeight="500"
                          >{el.title}
                          </Text>
                          <Text
                            fontSize='sm'
                            fontWeight='bold'>₹
                            <span style={{ fontWeight: "bold", fontSize: "20px" }}>{el.price}</span>
                          </Text>
                        </Flex>
                        <Box>
                          <Text fontSize='sm' marginTop={1} marginBottom={1}>{el.company}</Text>
                          <Text fontSize='xs' color='#007600'>In stock</Text>
                          <Text fontSize='xs' marginBottom={1}>Eligible for FREE Shipping</Text>
                          <Image src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' width={70} height={10} alt='img' />
                          <input type='checkbox' /><span fontSize='10px'>This will be a giftThis is a gift <span>Learn more</span></span>
                          <Flex gap={4} textAlign='center' marginTop={4} >
                            <Button
                              fontWeight='bold'
                              fontSize='xl'
                              width={2}
                              height={5}
                              textAlign='center'
                              paddingBottom={1}
                              marginRight={-2}
                              onClick={() => updateItemQuantity(el.id, el.quantity - 1)}
                            >-</Button>
                            <Text>Qty : {el.quantity}</Text>
                            <Button
                              fontWeight='bold'
                              fontSize='xl'
                              width={2}
                              height={5}
                              textAlign='center'
                              paddingBottom={1}
                              marginLeft={-2}
                              onClick={() => updateItemQuantity(el.id, el.quantity + 1)}
                            >+</Button>
                            <Text>|</Text>
                            <Text cursor="pointer" bgColor='white' color='#007185' fontSize='12px' height={2} marginTop={1} onClick={() => removeItem(el.id)}>Delete</Text>
                            <Text>|</Text>
                            <Text bgColor='white' color='#007185' fontSize='12px' height={2} marginTop={1}>Save for later   </Text>
                            <Text>|</Text>
                            <Text bgColor='white' color='#007185' fontSize='12px' height={2} marginTop={1}>Add to list  </Text>
                            <Text>|</Text>
                            <Text bgColor='white' color='#007185' fontSize='12px' height={2} marginTop={1}>See more like this</Text>
                          </Flex>
                        </Box>
                      </Box>
                    </Box>
                    <hr />
                  </Box>
                )
              })}

            </Box>
            <Box
              // border='2px solid black'
              width='100%'
              height='auto'
              textAlign='right'
              fontSize='xl'
            >
              Subtotal ({totalItems} items): <span style={{ fontSize: '14px', fontWeight: 'bold' }}>₹ </span><span style={{ fontWeight: 'bold' }}>{cartTotal}  </span>
            </Box>
          </Box>
          <Box
            bgColor='white'
            width="100%"
            height="auto"
            // border="2px solid black" 
            marginTop={5}
            padding={5}>
            <Text fontSize={['md', 'lg', 'xl', '3xl']} fontWeight='600' marginBottom={2}>Your Items</Text>
            <Flex
              gap={5}
              marginLeft={5}
              marginBottom={1}>
              <Text color='#007185'>No items saved for later</Text>
              <Text color='black'>Buy it again</Text>
            </Flex>
            <hr />
            <Box >No items to Buy again.</Box>
          </Box>
          <Box
            width="87%"
            height='auto'
            fontSize={'xs'}
            marginTop={5}
          // border="2px solid red"
          >
            <Text>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item&apos;s most recent price. Do you have a promotional code? We&apos;ll ask you to enter your claim code when it&apos;s time to pay.</Text>
          </Box>
        </Box >
        <Box
          width="21%"
          height='auto'
          // border="2px solid red"
          marginBottom={2}
        >
          <Box
            width="100%"
            height='auto'
            // border="2px solid black"
            marginBottom={5}
            bgColor='white'
          // justifyContent='center'

          >
            <Box
              // border="2px solid brown"
              alignItem='left'
            >
              <Text
                fontSize='lg'
                fontWeight={500}
                paddingTop={2}
                // textAlign='center'
                marginLeft={5}
              >
                Subtotal ({totalItems} items): ₹
                <span style={{ fontWeight: "bold", fontSize: "20px" }}> {cartTotal} </span>
              </Text>
              <Box marginLeft={5} borderColor='white'>
                <input type="checkbox" /> This order contains a gift
              </Box>
            </Box>
            <Link href="/checkout">
              <Button
                width={['50%', '60%', '70%', '90%']}
                height={8}
                margin={6}
                marginLeft={4}
                bgColor='#FFD814'

              >
                Proceed to Buy
              </Button></Link>

          </Box>
          <Box
            width="100%"
            height='auto'
            paddingTop={2}
            border="1px solid #DADDE0"
            bgColor='white'
            borderRadius={8}
          >
            <Box
              margin={5}
              marginTop={3}
            >
              <Text
                fontWeight='bold'
                fontSize="sm"
                marginBottom={2}
              >Products related to items in your cart</Text>
              <Text
                fontSize="xs">Sponsored</Text>
            </Box>
            <Box>
              {Related.products.map((el) => (
                <Flex
                  // border="1px solid black"
                  margin={2}
                  marginBottom={5}
                  height='auto'
                  gap={2}
                  key={el.id}
                >
                  <Image src={el.url} width={98} height={20} alt="img" />
                  <Box
                  // border="1px solid red"
                  >
                    <Text color='#007185' fontSize='lg'>{el.title}</Text>
                    <Text> Ratings</Text>
                    <Text color='#007185' fontSize='xs'>{el.rating}</Text>
                    <Text fontSize='xs'>{el.prize}</Text>
                    <Button
                      fontSize='xs'
                      bgColor='white'
                      border='1px solid #DADDE0'
                      padding={2}
                      height={5}
                    >{el.buttontext}</Button>
                  </Box>

                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Supplies />
      <Inspired />
      <TopPick />
      <History />
    </>
  )
}

export default Cart