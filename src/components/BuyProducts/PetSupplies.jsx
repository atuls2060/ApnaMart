import React,{ Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import {
    Box,
    Text,
  } from '@chakra-ui/react';

// import "../Styles/BestSeller.css";
import gro1 from "../../Images/gro1.png";
import gro2 from "../../Images/gro2.png";
import gro3 from "../../Images/gro3.png";
import gro4 from "../../Images/gro4.png";
import gro5 from "../../Images/gro5.png";
import gro6 from "../../Images/gro6.png";
import gro7 from "../../Images/gro7.png";
import gro8 from "../../Images/gro8.png";
import gro9 from "../../Images/gro9.png";
import gro10 from "../../Images/gro10.png";
import gro11 from "../../Images/gro11.png";
import gro12 from "../../Images/gro12.png";
import gro13 from "../../Images/gro13.png";
import gro14 from "../../Images/gro14.png";
import gro15 from "../../Images/gro15.png";


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

export default class PetSupplies extends Component {
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
        <Text fontSize={['md', 'lg', 'xl', '24px']} fontWeight='bold'>Frequently repurchased in Pet Supplies</Text>
        
        <Box>
          <Slider {...settings}>
            <div>
              <Image src={gro1} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro2} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro3} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro4} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro5} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro6} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro7} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro8} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro9} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro10} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro11} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro12} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro13} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro14} width="255px" height="500px" alt="img"/>
            </div>
            <div>
              <Image src={gro15} width="255px" height="500px" alt="img"/>
            </div>
          </Slider>
        </Box>
    </Box>
  )
}
}
