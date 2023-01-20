import React from 'react'
import { Heading } from '@chakra-ui/react'
import ImgSlider from './Slider/imgSlider'
import SecondImgSlider from './Slider/secondImgSlider'
import Clothing from './Slider/clothing'

const Categories = () => {
  return (
    <>
      <ImgSlider/>
      <SecondImgSlider/>
      <Clothing/>
    </>
  )
}

export default Categories