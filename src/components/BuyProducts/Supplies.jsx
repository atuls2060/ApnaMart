import React,{ Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import {
    Box,
    Text,
  } from '@chakra-ui/react';

import cart_supp1 from "../../Images/cart_supp1.png";
import cart_supp2 from "../../Images/cart_supp2.png";
import cart_supp3 from "../../Images/cart_supp3.png";
import cart_supp4 from "../../Images/cart_supp4.png";
import cart_supp5 from "../../Images/cart_supp5.png";
import cart_supp6 from "../../Images/cart_supp6.png";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        backgroundColor:"#E0E9F2",
        width:"40px", 
        height:"40px",
        paddingTop:"10px", 
        paddingLeft:"10px",
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:"8px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
        backgroundColor:"#E0E9F2",
        width:"40px", 
        height:"40px",
        paddingTop:"10px", 
        paddingLeft:"8px",
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:"8px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        marginLeft:"-10px",
        z:'5'
      }}
      onClick={onClick}
    />
  );
}

export default class Supplies extends Component {
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
    <Box 
    Width="70%" 
    // border='2px solid purple' 
    margin='25px'>
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Frequently repurchased in Beauty & Personal Care Supplies</Text>
        
        <Box
        // border='2px solid red' 
        width="97%" 
        margin='auto' 
        paddingLeft={2}>
          <Slider {...settings}>
            <div>
              <Image src={cart_supp1} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp2} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp3} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp4} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp5} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp6} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={cart_supp2} width="255px" height="500px" alt="img"/>
            </div>
            
          </Slider>
        </Box>
    </Box>
  )
}
}
