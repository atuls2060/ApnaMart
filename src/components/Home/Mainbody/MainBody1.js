import React from 'react'
import { Grid, GridItem ,Box,Button ,Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import Link from 'next/link'


export const MainBody1 = () => {
  return (
    <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4, 1fr)"}}  gap={6} w="100%"  >

        <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
            <Text fontSize="21px" color="#0F1111">Starting ₹79 | Home, kitchen & more</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_1._SY116_CB617449707_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Home & Kitchen Appliances</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_2._SY116_CB617449707_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Sport & Fitness</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_5._SY116_CB617449707_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Home Improvement</Text>
                    
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_7._SY116_CB617449707_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Power Tools</Text>
                    
                    </GridItem>
            </Grid>
                <Link href="/" fontSize="13px" color="#007185">
                    <Text fontSize="13px" color="#007185">See all offers</Text>
                </Link>
        </GridItem>
                   {/* ===================================== */}
        <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
            <Text  fontSize="21px" color="#0F1111">Register for free | Get business exclusive deals</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/App_janart_2022/QC_Computers_186_116_1301._SY116_CB615713373_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Computer & Accessories</Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/App_janart_2022/QC_Electronics_186_116_1301._SY116_CB615713373_.jpg" h={125}  /> 
                    <Text fontSize="12px" color="#0F1111">Electronics</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/App_janart_2022/QC_LA_186_116_1301._SY116_CB615713373_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Large Appliances</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/App_janart_2022/QC_Kitchen_186_116_1301._SY116_CB615713373_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Kitchen & Appliances</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

        {/* ========================================= */}

        <GridItem w='100%' bg='#fff' p="15px" boxShadow='md'>
            <Text  fontSize="21px" color="#0F1111">Great Republic Day Sale | Brands in Focus</Text>

            <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/Events/JanArt/Ascent/D67877384_INWLD_JanArt_Xiaomi_Ascent_PC_QuadCard_186X116._SY116_CB616673220_.jpg" h={125} /> 
                    <Text fontSize="12px" color="#0F1111">Xiaomi SmartPhones</Text>
                    
                </GridItem>
                <GridItem w='100%' bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/JANART2023/D67578936_QC_1x._SY116_CB615661018_.jpg" h={125}  /> 
                    <Text fontSize="12px" color="#0F1111">Upto 40% Off on Orion</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/TVs/JanART/Samsung/PC_QuadCard_372X232_2._SY116_CB615740626_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Series of Smart Tv's</Text>
                </GridItem>
                <GridItem w='100%'  bg='#fff'>
                     <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanART23/Tecno/Ascent/D67951420_IN_WLD_JanART23_Tecno_Ascent_PC_QuadCard_186X116._SY116_CB616976241_.jpg" h={125}  /> 
                   
                    <Text fontSize="12px" color="#0F1111">Upto 47% Off</Text>
                    </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

        {/* =============================================================================== */}
        
        <GridItem w='100%' bg='#fff' p="15px" boxShadow='md'>
            <Text  fontSize="21px" color="#0F1111">Up to 70% OFF | Bestselling PC Accessories</Text>

            <Grid templateColumns='repeat(1, 1fr)' gap={4} m="15px 0px" >
                <GridItem w='100%' bg='#fff' mb="10px">
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CC/MSO/PCA/PC_CategoryCard_379X304_2._SY304_CB616002051_.jpg" h={300} /> 
                </GridItem>
                    <Link href="/" fontSize="13px" color="#007185">
                         <Text fontSize="13px" color="#007185">See all offers</Text>
                    </Link>
            </Grid>
           
        </GridItem>

     
    </Grid>
  )
}

// ===================================================================================================
// ===================================================================================================


 export const MainBody2 = () => {
    return (
      <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4, 1fr)"}}  gap={6} w="100%">
  
          <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
              <Text fontSize="21px" color="#0F1111">Up to 75% off | Deals on top rated home products</Text>
  
              <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                  <GridItem w='100%'  bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/desktop_home/xcm_banners_home-pc-1-1_186x116_in-en._SY116_CB616003064_.jpg" h={125} /> 
                      <Text fontSize="12px" color="#0F1111">Starting ₹660 | Comforters</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/desktop_home/xcm_banners_home-pc-2_186x116_in-en._SY116_CB615991997_.jpg" h={125} /> 
                      <Text fontSize="12px" color="#0F1111">Starting ₹449 | BedSheets</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/desktop_home/xcm_banners_home-pc-3_186x116_in-en._SY116_CB615991974_.jpg" h={125} /> 
                      <Text fontSize="12px" color="#0F1111">Storage & Orgainization</Text>
                      
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                       <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/desktop_home/xcm_banners_home-pc-4_186x116_in-en._SY116_CB615991970_.jpg" h={125} /> 
                      <Text fontSize="12px" color="#0F1111">Lightining & Decor</Text>
                      
                      </GridItem>
              </Grid>
                  <Link href="/" fontSize="13px" color="#007185">
                      <Text fontSize="13px" color="#007185">See all offers</Text>
                  </Link>
          </GridItem>
                     {/* ===================================== */}
          <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
              <Text  fontSize="21px" color="#0F1111">Shop by brand</Text>
  
              <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                  <GridItem w='100%' bg='#fff' mb="10px">
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_5._SY116_CB615718173_.jpg" h={140} /> 
                      <Text fontSize="12px" color="#0F1111">Savings upto ₹11,000</Text>
                      
                  </GridItem>
                  <GridItem w='100%' bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_6._SY116_CB615718173_.jpg" h={140}  /> 
                      <Text fontSize="12px" color="#0F1111">Savings upto ₹11,000</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_7._SY116_CB615718173_.jpg" h={140}  /> 
                     
                      <Text fontSize="12px" color="#0F1111">Savings upto ₹18,000</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                       <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_8._SY116_CB615718173_.jpg" h={140}  /> 
                     
                      <Text fontSize="12px" color="#0F1111">Savings upto ₹10,000</Text>
                      </GridItem>
                      <Link href="/" fontSize="13px" color="#007185">
                           <Text fontSize="13px" color="#007185">See all offers</Text>
                      </Link>
              </Grid>
             
          </GridItem>
  
          {/* ========================================= */}
  
          <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
              <Text  fontSize="21px" color="#0F1111">Amazon Pay | Pay utility bills fast & conveniently</Text>
  
              <Grid templateColumns='repeat(2, 1fr)' gap={4} m="15px 0px" mb="25px">
                  <GridItem w='100%' bg='#fff' mb="10px">
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/JANART/pc_quadcard_186_x_116__Electricity._SY116_CB615730213_.jpg" h={125} /> 
                      <Text fontSize="12px" color="#0F1111">Electricity Bill</Text>
                      
                  </GridItem>
                  <GridItem w='100%' bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/JANART/pc_quadcard_186_x_116_LPG._SY116_CB615730213_.jpg" h={125}  /> 
                      <Text fontSize="12px" color="#0F1111">LPG Gas Cylinder</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/JANART/pc_quadcard186_x_116_Broadband._SY116_CB615730213_.jpg" h={125}  /> 
                     
                      <Text fontSize="12px" color="#0F1111">Broadband Bill</Text>
                  </GridItem>
                  <GridItem w='100%'  bg='#fff'>
                       <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/JANART/pc_quadcard_186_x_116_DTH._SY116_CB615730213_.jpg" h={125}  /> 
                     
                      <Text fontSize="12px" color="#0F1111">Dth Recharge</Text>
                      </GridItem>
                      <Link href="/" fontSize="13px" color="#007185">
                           <Text fontSize="13px" color="#007185">Explore More</Text>
                      </Link>
              </Grid>
             
          </GridItem>
  
          {/* =============================================================================== */}
          
          <GridItem w='100%' bg='#fff'  p="15px" boxShadow='md'>
              <Text  fontSize="21px" color="#0F1111">Starting ₹5,999 | TVs for every budget</Text>
  
              <Grid templateColumns='repeat(1, 1fr)' gap={4} m="15px 0px" >
                  <GridItem w='100%' bg='#fff' mb="10px">
                      <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_3._SY304_CB615774930_.jpg" h={300} />   
                  </GridItem>
                      <Link href="/" fontSize="13px" color="#007185">
                           <Text fontSize="13px" color="#007185">See all offers</Text>
                      </Link>
              </Grid>
             
          </GridItem>
  
       
      </Grid>
    )
  }