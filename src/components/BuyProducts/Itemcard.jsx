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
    // console.log('addItem:',addItem(props))
  return (
    <div>
        <Box 
              key={props.id} 
              style={{
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
                >{props.details}</Text>
                <Text color='#565959' fontSize='13px'>{props.brand}</Text>
                <Text color='#007185' fontSize='13px'>{props.rating}</Text>
                <Flex color='#565959' fontSize='13px' gap={5}>
                  <Text color="black" fontSize='15px'>₹ {props.price}</Text>
                  <Text><strike>{props.prizestrike}</strike></Text>
                </Flex>
                <Text color='#565959' fontSize='13px'>{props.discount}</Text>
                <Text color='#565959' fontSize='13px'>Get it by 
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
