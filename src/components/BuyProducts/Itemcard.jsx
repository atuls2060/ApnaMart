import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button
  } from '@chakra-ui/react';
  import Image from 'next/image'
  import {useCart} from 'react-use-cart';

export default function Itemcard(props) {

    let {addItem} = useCart();
  return (
    <div 
    style={{
      // border:"2px solid blue",
      // display:"grid",
      // gridTemplateColumns:'repeat(3,1fr)',
      // gap:"5px"
      }}>
        <Box 
            // border="2px solid green"
            width='95%'
            justifyContent='space-around'
            gap={1}
            key={props.id} 
              
           >
              <Box height={320} 
              // border="2px solid yellow"
              >
                <Box style={{
                    paddingLeft:"60px",
                    height:"130px"
                  }}>
                  <Image 
                  src={props.image} 
                  width={70} 
                  height={30}
                  alt="img"
                  />
                </Box>
                <Text 
                color="#007185" 
                fontSize='md' 
                lineHeight={1.2}
                letterSpacing={0.1}
                fontWeight={500}
                textAlign='left'
                >{props.details}</Text>
                <Text color='#565959' fontSize='13px' textAlign='left'>{props.brand}</Text>
                <Text color='#007185' fontSize='13px' textAlign='left'>{props.rating}</Text>
                <Flex color='#565959' fontSize='13px' gap={5} textAlign='left'>
                  <Text color="black" fontSize='15px' textAlign='left'>₹ {props.price}</Text>
                  <Text><strike>{props.prizestrike}</strike></Text>
                </Flex>
                <Text color='#565959' fontSize='13px' textAlign='left'>{props.discount}</Text>
                <Text color='#565959' fontSize='13px' textAlign='left'>Get it by 
                  <span style={{color:'black', fontSize:'15px', fontWeight:"600"}}>
                    {props.delivery}
                  </span>
                </Text>
              </Box>
              <Button 
                width={220} 
                height={9}
                bg={props.buttontext === "Add to Cart" ? "#FFD814" : "RGB(215 222 230)"} 
                borderRadius={30}
                onClick={()=>addItem(props.item)}
                >
                {props.buttontext}
              </Button>
            </Box>
    </div>
  )
}
