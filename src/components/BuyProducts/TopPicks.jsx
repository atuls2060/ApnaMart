import React,{ Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import {
    Box,
    Text,
  } from '@chakra-ui/react';

import cart_freq_gro1 from "../../Images/cart_freq_gro1.png";
import cart_freq_gro2 from "../../Images/cart_freq_gro2.png";
import cart_freq_gro3 from "../../Images/cart_freq_gro3.png";
import cart_freq_gro4 from "../../Images/cart_freq_gro4.png";
import cart_freq_gro5 from "../../Images/cart_freq_gro5.png";
import cart_freq_gro6 from "../../Images/cart_freq_gro6.png";
import cart_freq_gro7 from "../../Images/cart_freq_gro7.png";


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

export default class TopPick extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
  return (
    <Box Width="70%" border='2px solid black' margin='25px'>
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Top picks for you</Text>
        
        <Box>
          <Slider {...settings}>
            <div>
              <Image src={cart_freq_gro1} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro2} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro3} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro4} width="255px" height="500px"alt="img" />
            </div>
            <div>
              <Image src={cart_freq_gro5} width="255px" height="500px"alt="img" />
            </div>
            <div>
              <Image src={cart_freq_gro6} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro7} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro3} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_freq_gro4} width="255px" height="500px"alt="img" />
            </div>
            <div>
              <Image src={cart_freq_gro5} width="255px" height="500px" alt="img"/>
            </div>
            
          </Slider>
        </Box>
    </Box>
  )
}
}
