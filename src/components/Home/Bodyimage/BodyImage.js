import { Box,Image } from '@chakra-ui/react'
import React from 'react'

export const BodyImage = () => {
  return (
    <Box bg='#ffff' w='100%' p={4} color='white' m={5}>
        <Box w="80%" m="auto">
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg"   />
        </Box>  
  </Box>
  )
}

export const BodyImage1 =()=>{
    return(
        <Box w="70%" m="auto" mt={6} mb={6}>
             <Image src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"  />
        </Box>
    )
}

