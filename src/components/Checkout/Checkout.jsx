import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Accordion, Button, AccordionButton, AccordionItem, AccordionPanel, Heading, AccordionIcon, Text, Flex, Divider, VStack, HStack, Image, Input, Card, CardBody, Grid, useRadioGroup } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useCart } from 'react-use-cart'
import CheckoutItem from './CheckoutItem'
import RadioCard from './RadioCard'
import Success from './Success'
import { auth } from '@/utils/firebase'
import { useToast } from "@chakra-ui/react";

const Checkout = () => {
   const toast=useToast()
    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [click, setClick] = useState(false)
    const [loading, setLoading] = useState(false);
    const currentUser = auth.currentUser
    const loginHandler=()=>{
        toast({
                title: "Please Login First",
                status: "warning",
                isClosable: true,
              })
    }
    
    const router = useRouter();

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

    const placeOrder = () => {
      if (isEmpty) {
        toast({
          title: "Cart is Empty!",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        return;
      }
        setLoading(true)
        setTimeout(() => {
            setClick(!click)
            emptyCart()
        }, 1500)
    }



    const options = [{ value: 'Visa', url: "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" }, { value: 'MasterCard', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" }, { value: 'Code', url: "https://static.vecteezy.com/system/resources/previews/002/952/794/original/cash-on-delivery-steacker-free-vector.jpg" }]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()


    let disable = name === "" && pincode === "" && state === "" && city === "" || street === ""

    return (
      <Flex w="90%" my="40px" mx="auto" gap="40px">
        <Success click={click} />
        <Box w="70%" minH="60vh">
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading size="sm">Select a delivery address</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      focusBorderColor="#f7ca00"
                      type="text"
                      placeholder="Full Name"
                    />
                    <Input
                      onChange={(e) => setPincode(e.target.value)}
                      value={pincode}
                      focusBorderColor="#f7ca00"
                      type="number"
                      placeholder="Pincode"
                    />
                  </HStack>
                  <HStack>
                    <Input
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                      focusBorderColor="#f7ca00"
                      type="text"
                      placeholder="State"
                    />
                    <Input
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      focusBorderColor="#f7ca00"
                      type="text"
                      placeholder="City"
                    />
                  </HStack>
                  <Input
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                    focusBorderColor="#f7ca00"
                    type="text"
                    placeholder="Streat Address"
                  />
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading size="sm">Select a payment method</Heading>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <HStack {...group}>
                      {options.map((item) => {
                        const radio = getRadioProps({ value: item.value });
                        return (
                          <RadioCard key={item.value} {...radio}>
                            <Image src={item.url} width={70} height={50} />
                          </RadioCard>
                        );
                      })}
                    </HStack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading size="sm"> Offers</Heading>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    No Offers available at the moment
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Box border="1px solid #e4e4e4" w="30%" p="30px">
          <VStack align="stretch" spacing={4}>
            <Text fontSize="12px">
              Choose a payment method to continue checking out. You will still
              have a chance to review and edit your order before it is final
            </Text>
            <Heading fontWeight="medium" size="md">
              Order Summery
            </Heading>
            <Divider />
            <Text>Items</Text>
            {items.map((item, index) => {
              return (
                <CheckoutItem
                  key={index}
                  {...item}
                  removeItem={() => removeItem(item.id)}
                  updateItem={(change) =>
                    updateItemQuantity(item.id, item.quantity + change)
                  }
                />
              );
            })}
            <HStack justifyContent="space-between">
              <Heading color="#b12704" fontWeight="medium" size="md">
                Order Total:
              </Heading>
              <Heading color="#b12704" fontWeight="medium" size="md">
                ₹ {cartTotal}
              </Heading>
            </HStack>
            <Divider />
            {currentUser ? (
              <Button
                isLoading={loading}
                pointerEvents={disable ? "none" : "all"}
                onClick={placeOrder}
                width="100%"
                bg={disable ? "lightgray" : "#ffe100"}
                _hover={{ backgroundColor: "#f7ca00" }}
              >
                Place Order
              </Button>
            ) : (
              <Button
                isLoading={loading}
                pointerEvents={disable ? "none" : "all"}
                onClick={loginHandler}
                width="100%"
                bg={disable ? "lightgray" : "#ffe100"}
                _hover={{ backgroundColor: "#f7ca00" }}
              >
                Place Order
              </Button>
            )}
          </VStack>
        </Box>
      </Flex>
    );
}

export default Checkout