import Image from 'next/image'
import React from 'react'

import { Box, Text, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { BiCart, BiMenu } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import Link from 'next/link'

const Navbar = () => {
  return <>
    <NavbarTop />
    <NavbarBottom />
  </>

}

export const NavbarTop = () => {
  return <HStack bg="#131921" p="2" color="white" justifyContent="space-between" gap="4">
    <HStack spacing="15px">
      <Link href="/">
        <Image src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2Flogo.png?alt=media&token=0d097020-fb24-4bc4-9367-e9fbb75192b4" alt='logo'
          width="140"
          height="50" />
      </Link>
      <HStack>
        <SlLocationPin />
        <Box>
          <Text fontSize="12px">Hello</Text>
          <Heading size="xs">Select your address</Heading>
        </Box>
      </HStack>
    </HStack>
    <Box flex="1">

      <InputGroup>
        <InputLeftElement>
          <Box bg="#f3f3f3" py="2" px="3" borderRight="1px solid lightgray" borderLeftRadius="4">
            <Text color="black">
              All
            </Text>
          </Box>

        </InputLeftElement>
        <Input focusBorderColor="#daaa4d" bg="white" type="text" placeholder="" />
        <InputRightElement>
          <Box bg="#F3A847" p="3" borderRightRadius="4">
            <BsSearch color='black' />
          </Box>
        </InputRightElement>
      </InputGroup>

    </Box>
    <HStack spacing="20px">
      <HStack>
        <img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2FFlag-of-India.svg?alt=media&token=3a3a7538-fdd7-4989-b252-7a4fa043897e"
          alt='india flag'
          width="25"
          height="10"
        />
        <Text>EN</Text>
      </HStack>
      <Link href="/login">
        <Box>
          <Text fontSize="12px">Hello, sign in</Text>
          <Heading size="xs">Account & Lists</Heading>
        </Box>
      </Link>
      <Link href="/products/1">
        <Box>
          <Text fontSize="12px">Returns</Text>
          <Heading size="xs">& Orders</Heading>
        </Box>
      </Link>
      <Link href="/cart">
        <HStack>
          <BiCart size="35px" />
          <Text>Cart</Text>
        </HStack>
      </Link>
    </HStack>
  </HStack>
}

export const NavbarBottom = () => {
  const Links = [
    {
      label: "All",
      href: "/products"
    },
    {
      label: "Sell",
      href: "/products"
    },
    {
      label: "Amazon miniTV",
      href: "/products"
    },
    {
      label: "Best Sellers",
      href: "/products"
    },
    {
      label: "Mobiles",
      href: "/products"
    },
    {
      label: "Today's Deals",
      href: "/products"
    },
    {
      label: "Customer Service",
      href: "/products"
    },
    {
      label: "Electronics",
      href: "/products"
    },
    {
      label: "Prime",
      href: "/products"
    },
    {
      label: "Fashion",
      href: "/products"
    },
    {
      label: "Amazon Pay",
      href: "/products"
    },
    {
      label: "Home & Kitchen",
      href: "/products"
    },
  ]

  return <HStack bg="#232F3E" color="white" py="1" px="3" justifyContent="space-between">
    <HStack spacing="4">
      <BiMenu />
      {
        Links.map((link) => {
          return <Link key={link.label} href={link.href}>{link.label}</Link>
        })
      }
    </HStack>
    <Box position="relative">
      <Image src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2Fnav_sale_banner.jpg?alt=media&token=7adae246-773e-4d77-9810-343985fcf976"
        alt='offer'
        width="350"
        height="10"
      />
    </Box>
  </HStack>
}

export default Navbar