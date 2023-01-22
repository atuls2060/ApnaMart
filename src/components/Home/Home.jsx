import React from 'react'
import { Box } from "@chakra-ui/react";
import ImageSlider from "./Carousel/ImageSlider";
import { SlideData } from "./Carousel/SlideData";
import MainBody from './Mainbody/MainBody';
import {MainBody1} from './Mainbody/MainBody1';
import {MainBody2} from './Mainbody/MainBody1';
import BodyCarousel from './Bodycarousel/BodyCarousel';
import BodyCarousel1 from './Bodycarousel/BodyCarousel1';
import BodyCarousel2 from './Bodycarousel/BodyCarousel2';
import BodyCarousel3 from './Bodycarousel/BodyCarousel3';
import {BodyImage} from './Bodyimage/BodyImage';
import { BodyImage1 } from './Bodyimage/BodyImage';
import Footer1 from "./Footer/footer1";
import Footer2 from "./Footer/footer2"
import Footer3 from "./Footer/footer3"
import Footer4 from "./Footer/footer4"
const Home = () => {
    return (
        <>
        
             <Box w="100%" color="white"  backgroundColor="#f2f2f2" >
                <ImageSlider slides={SlideData} />
                <Box  w="100%"  mt="-50px">
                <MainBody/> 
                <BodyCarousel/>
                <BodyCarousel1/>
                <BodyCarousel2/>
                <MainBody1/>
                <BodyCarousel3/>
                <BodyImage/>
                <BodyCarousel2/>
                <BodyImage1/>
                <MainBody2/>
                <BodyCarousel3/>
                <Footer1/>
                <Footer2/>
                <Footer3/>
                <Footer4/>
                </Box>
            </Box>
             
        </>
    )
}

export default Home