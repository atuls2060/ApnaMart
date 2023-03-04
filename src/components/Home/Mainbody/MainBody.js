import React from 'react'
import { Grid, GridItem ,Box,Button ,Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import Link from 'next/link'
const MainBody = () => {
  return (
    <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4, 1fr)"}}  gap={6} w="100%"  mt={{sm:0,md:-100,lg:-250}} z-index={100} position="relative" >

        <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
            <Text fontSize="21px" color="#0F1111">Most searched smartphone series on Amazon</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px">
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" /> 
                    <Text fontSize="12px" color="#0F1111" fontFamily="Amazon Ember">Redmi series : Starting</Text>
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
        <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
            <Text  fontSize="21px" color="#0F1111">Starting ₹199 | Men&apos;s fashion</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Clothing</Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" h={125}  /> 
                    <Text fontSize="12px" color="#0F1111">Footwear</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Watches</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Bags & luggage</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

        {/* ========================================= */}

        <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
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
                    <Text fontSize="12px" color="#0F1111">₹17,999</Text>
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
        <GridItem w='100%' bg='#fff' boxShadow='md' p="15px 15px 0px 15px">
                <Box  mb="20px" p="0px 15px">
                        
                          <Text fontSize='21px'color="#0F1111">
                          Sign in for your best experience
                           </Text>
                          <Button backgroundColor="#ff9900" w="100%" fontSize="13px" mt='10px' >
                           <Link href="/login">Sign in securely</Link> 
                          </Button>
                </Box>
            <Box  w='100%'  color='white' boxShadow='md' >
                <Image src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" w="100%" h="300px" />
                    
            </Box>

        </GridItem>

        {/* =============================================================================== */}
        
        <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
            <Text  fontSize="21px" color="#0F1111">Starting ₹49 | Books, toys & more</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/2L-coupons-PC-1x._SY116_CB615773334_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Books Starting ₹49</Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/Buy-2-get-5-off-PC-1x._SY116_CB615773334_.jpg" h={125}  /> 
                    <Text fontSize="12px" color="#0F1111">Toys Starting ₹199</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/No-cost-emi-PC-1x._SY116_CB615773334_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Trimmers Starting ₹349</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/Janart/PC-QC-Jan-art-2023_VG_1x._SY116_CB615983641_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Gaming Accessories starting ₹199</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

        {/* ================================================== */}

        <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
            <Text  fontSize="21px" color="#0F1111">Starting ₹79 | Home, kitchen & more</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_4._SY116_CB617449707_.jpg" h={120} /> 
                    <Text fontSize="12px" color="#0F1111">Upto 80% off | Home & decor </Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_6._SY116_CB617449707_.jpg" h={120}  /> 
                    <Text fontSize="12px" color="#0F1111">Upto 70% off | Cookware & Dinning</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/JanART/Hero/1/PC_QuadCard_372X232_1_2x._SY116_CB615571575_.jpg" h={110}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Lawn & Garden</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_8._SY116_CB617449707_.jpg" h={110}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Upto 70% off | Home Improvement</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>
    {/* =================================================== */}

    <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
            <Text  fontSize="21px" color="#0F1111">Up to 75% off | Top deals on Amazon brands & more</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_h-k-new_186x116_in-en._SY116_CB615989515_.jpg" h={120} /> 
                    <Text fontSize="12px" color="#0F1111">Upto 60% off | Home & Kitchen Products </Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_audio-new_186x116_in-en._SY116_CB615989513_.jpg" h={120}  /> 
                    <Text fontSize="12px" color="#0F1111">Upto 65% off | Speakers & more</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_spb-new_186x116_in-en._SY116_CB615989508_.jpg" h={110}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Under ₹599 | Clothing shoes & more</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_daily-essentials-new_186x116_in-en._SY116_CB615989508_.jpg" h={110}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Upto 75% off | Daily essentials</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>
    
    {/* ========================================= */}

    <GridItem w='100%' bg='#fff' boxShadow='md' p="15px">
            <Text  fontSize="21px" color="#0F1111">Up to 60% off | Upgrade to Smart TVs</Text>

            <Grid templateColumns='repeat(1, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_2_1._SY304_CB615774930_.jpg" h={300} /> 
                    <Text fontSize="12px" color="#0F1111">Upto 60% off | Home & Kitchen Products </Text>
                    
                </GridItem>
               
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>
    </Grid>
  )
}

export default MainBody