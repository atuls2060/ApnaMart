import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick';
import {NextArrow,PrevArrow} from "react-slick"

const settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 816,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <>
    <Slider>
  <Box  h={"280px"} width={"100%"} >
    <HStack>
    <Box cursor={"pointer"}  h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41-NMtHvu0L._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>URKNIT Winter Wear Polyester Sweatshirts for Men&apos;s</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>
      
      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,390 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41E8KJ5FAaL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Amazon Brand - Inkast Denim Co. Men Sweatshirt</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,890 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41PwbSLYqdL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Amazon Brand - Symbol Men Sweatshirt</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,990 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/31ICo93zojL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Alan Jones Clothing Men&apos;s Cotton Hooded Sweatshirt</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹2,190 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41E8KJ5FAaL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Amazon Brand - Inkast Denim Co. Men Sweatshirt</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,890 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41qva+qhQhL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Campus Sutra Full Sleeve Zipper Hoodie for Men</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹3,590 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41-NMtHvu0L._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>URKNIT Winter Wear Polyester Sweatshirts for Men&apos;s</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,390 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    <Box  cursor={"pointer"} h={"300px"} w={"12%"} border={"1px solid #949696"}>
    <Image src="https://m.media-amazon.com/images/I/41i+1P4qZrL._AC_SR160,200_.jpg"></Image>
      <Text style={{color:"#007AA0",fontSize:"12px",fontWeight:"medium"}}>Amazon Brand - Symbol Men Sweatshirt</Text>
      <Button _hover={{backgroundColor:"#B12704"}} h={"10%"} color={"white"} bg={"#B12704"}>Deal of the Day</Button>

      
      <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,490 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
    </Box>
    
    </HStack>

    

  </Box>
  </Slider>


    </>
  )
}

export default Carousel