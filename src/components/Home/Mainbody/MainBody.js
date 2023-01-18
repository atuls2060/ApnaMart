import React from 'react'
import { Grid, GridItem ,Box,Button ,Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import Link from 'next/link'
const MainBody = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6} w="100%">

        <GridItem w='100%' bg='#fff' border="2px solid red" p="15px">
            <Text fontSize="21px" color="#0F1111">Most searched smartphone series on Amazon</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px">
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Redmi series : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">₹5,999</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Samsung M series : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">₹8,999</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">OnePlus series : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">₹18,999</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">IQOO series : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">₹12,999</Text>
                    </GridItem>
            </Grid>
                <Link href="/" fontSize="13px" color="#007185">
                    <Text fontSize="13px" color="#007185">See all offers</Text>
                </Link>
        </GridItem>
                   {/* ===================================== */}
        <GridItem w='100%' bg='#fff' border="2px solid red" p="15px">
            <Text  fontSize="21px" color="#0F1111">Starting ₹199 | Men's fashion</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="15px">
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Clothing</Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Footwear</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" /> 
                   
                    <Text fontSize="12px" color="#0F1111">Watches</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" /> 
                   
                    <Text fontSize="12px" color="#0F1111">Bags & luggage</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

        {/* ========================================= */}

        <GridItem w='100%' bg='#fff' border="2px solid red" p="15px">
            <Text  fontSize="21px" color="#0F1111">Latest and upcoming launches on Amazon</Text>

            <Grid templateColumns='repeat(2, 1fr)'  gap={4} m="15px 0px">
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116._SY116_CB615741130_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">IQOO 11 5G : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">₹59,999</Text>
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_3._SY116_CB615741130_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Redmi Note 12 5G : Starting</Text>
                    <Text fontSize="12px" color="#0F1111">17,999</Text>
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Samsung Galaxy M04 5G: Starting ₹9,499</Text>
                   
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_4._SY116_CB615741130_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111">Explore all new Launches</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
            
        </GridItem>
                    {/* ======================================= */}
        <GridItem w='100%' bg='#fff' border="2px solid red" p="15px">
                <Box border="2px solid red" mb="10px" p=" 0px 15px">
                        
                          <Text fontSize='21px'color="#0F1111">
                          Sign in for your best experience
                           </Text>
                          <Button  colorScheme='orange' w="100%" fontSize="13px" mt='10px' p="0px 10px 0px 11px">
                            Sign in securely
                          </Button>
                </Box>
            <Box  w='100%' p={4} color='white'>
                <Image src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" w="100%" />
                    
            </Box>

        </GridItem>
    
    </Grid>
  )
}

export default MainBody