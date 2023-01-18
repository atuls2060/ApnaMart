import React,{ Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import {
    Box,
    Text,
  } from '@chakra-ui/react';

import cart_best1 from "../../Images/cart_best1.png";
import cart_best2 from "../../Images/cart_best2.png";
import cart_best3 from "../../Images/cart_best3.png";
import cart_best4 from "../../Images/cart_best4.png";
import cart_best5 from "../../Images/cart_best5.png";
import cart_best6 from "../../Images/cart_best6.png";



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

export default class Bestseller extends Component {
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
    <Box Width="70%" border='2px solid black' margin='25px'>
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Bestsellers in Beauty</Text>
        
        <Box>
          <Slider {...settings}>
            <div>
              <Image src={cart_best1} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best2} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best3} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best4} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best5} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best6} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best2} width="255px" height="500px" />
            </div>
            <div>
              <Image src={cart_best3} width="255px" height="500px" />
            </div>
            
          </Slider>
        </Box>
    </Box>
  )
}
}
