import React from 'react'
import { Box } from "@chakra-ui/react";
import ImageSlider from "./Carousel/ImageSlider";
import { SlideData } from "./Carousel/SlideData";
import MainBody from './Mainbody/MainBody';
import BodyCarousel from './Bodycarousel/BodyCarousel';
const Home = () => {
    return (
        <>
        
             <Box w="100%" p={4} color="white">
                <ImageSlider slides={SlideData} />
                <MainBody/> 
             </Box>
             
        </>
    )
}

export default Home