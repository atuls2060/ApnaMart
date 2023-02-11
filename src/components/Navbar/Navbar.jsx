import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Styles from "./Navbar.module.css"

import { Box, Text, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Show, useBreakpointValue, VStack } from '@chakra-ui/react'
import { BiCart, BiMenu } from "react-icons/bi"
import { FaRegUser } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import SignInPopUp from './SignInPopUp'
import { useCart } from 'react-use-cart';
import { useEffect } from 'react'
import { auth } from '@/utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { searchProductsApi } from '@/redux/products/products.api'
import SearchItem from './SearchItem'
import { useRouter } from 'next/router'

const Navbar = ({ showBottomNav = false, hideNav = false }) => {
  const dispatch = useDispatch()
  const currentUser = auth.currentUser
  const [name, setName] = useState("sign in")

  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName)
      } else {
        setName("sign in")
      }
    });
  }

  useEffect(() => {
    checkAuth()
  }, [])


  return <>
    {!hideNav && <NavbarTop dName={name} />}
    {!hideNav && <NavbarMiddle />
    }
    {showBottomNav && <NavbarBottom />}
  </>

}

export const NavbarTop = ({ dName }) => {
  const { totalItems } = useCart();
  const [showSignIn, toggleSignInPopUp] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([])
  const timerRef = useRef(null);
  const router = useRouter()

  const { data: { name } } = useSelector((store) => store.authManager)
  if (name !== "") {
    dName = name
  }

  const changeHandler = (e) => {
    const val = e.target.value
    setKeyword(val)
    search(val)
  }

  const search = (keyword) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    timerRef.current = setTimeout(() => {
      getSearchResults(keyword)
    }, 700)
  }
  const getSearchResults = async (keyword) => {
    const data = await searchProductsApi(keyword)
    setResult(data);

    console.log(data)
    if (data.length > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const openSearchResult = (id) => {
    setShow(false)
    router.push(`/products/${id}`)
  }


  return <HStack whiteSpace={'nowrap'} bg="#131921" zIndex="5" top="0" p="2" position="fixed" w="100%" color="white" justifyContent="space-between" gap="4" onMouseLeave={() => toggleSignInPopUp(false)}>
    <HStack spacing="15px">
      <Link href="/">
        <Box w={{ base: '70px', md: '100px', lg: '100px', xl: "140px" }}>
          <Image src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2Flogo.png?alt=media&token=0d097020-fb24-4bc4-9367-e9fbb75192b4" alt='logo'
            width="140"
            height="50" />
        </Box>
      </Link>
      <HStack>
        <SlLocationPin />
        <Show above='lg'>
          <Box>
            <Text fontSize="12px">Hello</Text>
            <Heading size="xs">Select your address</Heading>
          </Box>
        </Show>
      </HStack>
    </HStack>
    <Box flex="1" >

      <InputGroup>
        <InputLeftElement>
          <Box bg="#f3f3f3" py="2" px="3" borderRight="1px solid lightgray" borderLeftRadius="4">
            <Text color="black">
              All
            </Text>
          </Box>

        </InputLeftElement>
        <Input paddingLeft="50px" className={Styles.search_input} focusBorderColor="#daaa4d" color="black" bg="white" type="text" onChange={changeHandler} placeholder="" />
        <VStack display={show ? "block" : "none"} p={show ? 2 : 0} border={` ${show ? 1 : 0}px solid #e4e4e4`} align={"start"} gap={2} className={Styles.search_result_container}>
          {
            result?.map((item, index) => {
              return <Link key={index} href={`/products/${item.id}`} onClick={() => openSearchResult(item.id)}> <SearchItem key={index} {...item} /></Link>
            })
          }
        </VStack>
        <InputRightElement>
          <Box bg="#F3A847" p="3" borderRightRadius="4">
            <BsSearch color='black' />
          </Box>
        </InputRightElement>
      </InputGroup>

    </Box>
    <HStack spacing="20px">
      <Show above='md'>
        <HStack>
          <img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/Amazon-clone%2Flogos%2FFlag-of-India.svg?alt=media&token=3a3a7538-fdd7-4989-b252-7a4fa043897e"
            alt='india flag'
            width="25"
            height="10"
          />
          <Text>EN</Text>
        </HStack>
      </Show>
      <Box onMouseEnter={() => toggleSignInPopUp(true)} >
        <Show above='md'>
          <Text fontSize="12px">Hello, {dName}</Text>
          <Heading size="xs">Account & Lists</Heading>
        </Show>
        <Show below='md'>
          <FaRegUser size="23px" />
        </Show>
        {
          showSignIn && <SignInPopUp togglePopUp={(value) => toggleSignInPopUp(value)} />
        }
      </Box>
      <Show above='lg'>
        <Link href="/products/1">
          <Box>
            <Text fontSize="12px">Returns</Text>
            <Heading size="xs">& Orders</Heading>
          </Box>
        </Link>
      </Show>
      <Link href="/cart">
        <HStack>
          <BiCart size="35px" />
          <Text>Cart {totalItems}</Text>
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

  return <HStack bg="#232F3E" color="white" py="1" mt="56px" justifyContent="space-between">
    <HStack spacing="3" overflow="hidden" whiteSpace={'nowrap'}>
      <BiMenu />
      {
        Links.map((link) => {
          return <Link key={link.label} href={link.href}><Text py={1}>{link.label}</Text></Link>
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