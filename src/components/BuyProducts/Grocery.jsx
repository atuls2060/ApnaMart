import React,{ Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    Box,
    Text,
    Flex,
    Button,
  } from '@chakra-ui/react';
  import data from "./data.js";
  import Image from 'next/image'

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          display: "block", 
          background: "RGB(203 210 217)", 
          width:"30px", 
          height:"30px",
          padding:"5px", 
          justifyContent:"center", 
          alignItems:"center",
          borderRadius:"8px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          display: "block", 
          background: "green", 
          width:"30px", 
          height:"30px",
          padding:"5px", 
          justifyContent:"center", 
          alignItems:"center",
          borderRadius:"8px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
        onClick={onClick}
      />
    );
  }



  
export default class Grocery extends Component {
    render() {
      var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Box minWidth={95} border='2px solid black' margin='25px'>
        <Text fontSize={['md', 'lg', 'xl', '25px']} fontWeight='bold' marginBottom={5}>Discover</Text>
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Frequently repurchased in Grocery</Text>
        <Slider {...settings}>
            {data.products.map((el) => (
            <Box key={el.id} style={{
              border:"2px solid red",
              gap:"5px",
              width:"100%",
              padding:"10px"
            }}>
              <Box height={320} border="2px solid yellow">
                <Box style={{
                    paddingLeft:"60px",
                    height:"130px"
                  }}>
                  <img 
                  src={el.image} 
                  width="70px" 
                  height="30px"
                  alt="img"
                  />
                </Box>
                <Text 
                color="#007185" 
                fontSize='md' 
                lineHeight={1.2}
                letterSpacing={0.1}
                fontWeight={500}
                >{el.details}</Text>
                <Text color='#565959' fontSize='13px'>{el.brand}</Text>
                <Text color='#007185' fontSize='13px'>{el.rating}</Text>
                <Flex color='#565959' fontSize='13px' gap={5}>
                  <Text color="black" fontSize='15px'>₹ {el.prize}</Text>
                  <Text><strike>{el.prizestrike}</strike></Text>
                </Flex>
                <Text color='#565959' fontSize='13px'>{el.discount}</Text>
                <Text color='#565959' fontSize='13px'>Get it by 
                  <span style={{color:'black', fontSize:'15px', fontWeight:"600"}}>
                    {el.delivery}
                  </span>
                </Text>
              </Box>
              <Button 
                width={220} 
                height={9}
                bg={el.buttontext === "Add to Cart" ? "#FFD814" : "RGB(215 222 230)"} 
                borderRadius={30}>
                {el.buttontext}
              </Button>
            </Box>))}
        </Slider>
    </Box>
  )
}
}