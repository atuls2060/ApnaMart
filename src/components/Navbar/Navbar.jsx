import Image from 'next/image'
import React, { useState } from 'react'
import Styles from "./Navbar.module.css"

import { Box, Text, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { BiCart, BiMenu } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import SignInPopUp from './SignInPopUp'
import {useCart} from 'react-use-cart';

const Navbar = ({ showBottomNav = false }) => {

  const dispatch = useDispatch()
  const { data: { token, isAuthenticated } } = useSelector((store) => store.authManager)

  return <>
    <NavbarTop />
    <NavbarMiddle />
    {showBottomNav && <NavbarBottom />}
  </>

}

export const NavbarTop = () => {

  const {totalItems} = useCart();
  return <HStack bg="#131921" p="2" color="white" justifyContent="space-between" gap="4">

  const [showSignIn, toggleSignInPopUp] = useState(false);

  return <HStack bg="#131921" zIndex="5" top="0" p="2" position="fixed" w="100%" color="white" justifyContent="space-between" gap="4" onMouseLeave={() => toggleSignInPopUp(false)}>

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
      <Box  onMouseEnter={() => toggleSignInPopUp(true)} >
        <Text fontSize="12px">Hello, sign in</Text>
        <Heading size="xs">Account & Lists</Heading>
        {
          showSignIn && <SignInPopUp togglePopUp={(value)=>toggleSignInPopUp(value)} />
        }
      </Box>
      <Link href="/products/1">
        <Box>
          <Text fontSize="12px">Returns</Text>
          <Heading size="xs">& Orders</Heading>
        </Box>
      </Link>
      <Link href="/cart">
        <HStack>
          <BiCart size="35px" />
          <Text>Cart <span style={{fontSize:'20px', fontWeight:"bold"}}>{totalItems}</span></Text>
        </HStack>
      </Link>
    </HStack>
  </HStack>
}

export const NavbarMiddle = () => {
  const Links = [
    {
      label: "All",
      href: "/categories"
    },
    {
      label: "Sell",
      href: "/categories"
    },
    {
      label: "Buy Again",
      href: "/buyagain"
    },
    {
      label: "Amazon miniTV",
      href: "/categories"
    },
    {
      label: "Best Sellers",
      href: "/categories"
    },
    {
      label: "Mobiles",
      href: "/categories"
    },
    {
      label: "Today's Deals",
      href: "/categories"
    },
    {
      label: "Customer Service",
      href: "/categories"
    },
    {
      label: "Electronics",
      href: "/categories"
    },
    {
      label: "Prime",
      href: "/categories"
    },
    {
      label: "Fashion",
      href: "/categories"
    },
    {
      label: "Amazon Pay",
      href: "/categories"
    },
    {
      label: "Home & Kitchen",
      href: "/categories"
    },
  ]

  return <HStack bg="#232F3E" color="white" py="1" px="3" mt="56px" justifyContent="space-between">
    <HStack spacing="3">
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
export const NavbarBottom = () => {
  const [subMenu, toggleSubMenu] = useState(false)
  const [subMenuData, setSubMenuData] = useState(0)

  const Links = [
    {
      label: "Electronics",
      href: "/products"
    },
    {
      label: "Mobiles & Accessories",
      href: "/products"
    },
    {
      label: "Laptops & Accessories",
      href: "/products"
    },
    {
      label: "TV & Home Entertainment",
      href: "/products"
    },
    {
      label: "Audio",
      href: "/products"
    },
    {
      label: "Cameras",
      href: "/products"
    },
    {
      label: "Computer Peripherals",
      href: "/products"
    },
    {
      label: "Smart Technology",
      href: "/products"
    },
    {
      label: "Musical Instruments",
      href: "/products"
    },
    {
      label: "Office & Stationery",
      href: "/products"
    },
  ]


  return <Box position="relative">
    <HStack borderBottom="1px solid #e4e4e4" justifyContent="space-evenly">
      {
        Links.map((link, index) => {
          return <Link key={link.label} href={link.href}>
            <Text
              position="relative"
              py="3"
              onMouseEnter={() => {
                toggleSubMenu(true);
                setSubMenuData(index)
              }}
              onMouseLeave={() => toggleSubMenu(false)}
              fontWeight={index === 0 && "bold"}
              fontSize="13px">
              {link.label}
              {
                subMenu && index === subMenuData && < Box className={Styles.nav_link_arrow}></Box>
              }
            </Text>
          </Link>
        })
      }
    </HStack>
    {
      subMenu && <HStack
        position="absolute"
        zIndex="1" bg="white"
        border="1px solid gray"
        width="100%"
        height="300px"
        onMouseEnter={() => toggleSubMenu(true)}
        onMouseLeave={() => toggleSubMenu(false)}
      >
        <Text>Hello</Text>
      </HStack>
    }
  </Box >
}


export default Navbar