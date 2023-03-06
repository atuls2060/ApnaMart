import React from 'react'
import {Box,Flex,Text,Image, VStack, HStack, Button, Center, Grid} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"
// import Carousel from './Carousel'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Footer2 from '../Home/Footer/footer2'
import Footer1 from '../Home/Footer/footer1'
import Footer3 from '../Home/Footer/footer3'
import Footer4 from '../Home/Footer/footer4'
import { useCart } from 'react-use-cart'





const ProductDetail = () => {

    let {addItem} = useCart();
    const [cart,setCart]=useState([])
    const [data,setData] = useState({})

    const addtocart=async()=>{
      setCart([...cart,data])
      addItem({...data})
    //   await fetch("http://localhost:8080/cart",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify(data)
    //   })
    }
    console.log(cart)
    
    const router = useRouter();

    const {query} = router;
    const id = query.id;

    const getProduct =async (id)=>{
        try {
             const res = await axios.get(`https://happy-moccasins-goat.cyclic.app/products/${id}`)
             setData(res.data)
        } catch (error) {
            
        }
    }
    const goBack = ()=>{
        router.back()
    }

    useEffect(()=>{
        getProduct(id)
    },[id])
    console.log(data)
    return (
        <>
        
            <Box   style={{height:"50px" ,width:"100%",backgroundColor:"#F7F8F8"}}>
                <Flex style={{justifyContent:"space-around" ,alignItem:"center"}}>
                    <Image style={{height:"50px", width:"40px"}} src={data.url}></Image>
                    <Text style={{marginTop:"10px"}}>{data.desc}</Text>
                    <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹{data.price} <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
                </Flex>
            </Box>
            <Box >
                <Flex justifyContent={"space-between"}>
                <Text p={2} onClick={goBack} style={{textDecoration:"underline",cursor:"pointer"}}><span>-</span>Back to result</Text>
                <Text mt={"5px"} style={{textDecoration:"underline",cursor:"pointer"}}>Sponsored</Text>
                </Flex>
            </Box>
            
            <Box style={{height:"97vh",  width:"100%"}}>
                
                <Flex>
                <HStack align="stretch" style={{height:"100vh",  width:"40%"}}  >
                    <Image h={{base:"70px",sm:"90px", md:"150px",lg:"280"}} mx="auto"  src={data.url}></Image>
                </HStack>
                <Box height={{base:"90vh",sm:"94vh",md:"110vh",lg:"115vh"}} Size={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} padding={"10px"} border={"3px solid #F7F8F8"} style={{ width:"45%",}}>
                    
                    <VStack >
                        
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} style={{color:"#007AA0" ,fontWeight:"bold"}}>{data.desc}</Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} style={{fontWeight:"bold"}}>{data.desc}</Text>
                        <HStack><span><Image style={{height:"60px"}} src="https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?b=1&s=170667a&w=0&k=20&c=0oTDNjPGdClD5HtUDPXp7FkPFh5aNsY0dzKFvn6siO8="></Image></span><Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} style={{color:"#007AA0", fontWeight:"bold"}}>11,363 ratings</Text ><Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} style={{color:"#007AA0",fontWeight:"bold"}}>185 answered questions</Text>
                        </HStack>
                        <HStack ><span><Button fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}}  style={{color:"#ffffff", width:"90%" ,height:"23px",backgroundColor:"#C45500"}}>#1 Best Seller</Button></span><Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} style={{color:"#007AA0",fontWeight:"bold"}}>{data.desc}</Text ><Text style={{color:"#007AA0",fontSize:"15px",fontWeight:"bold"}}></Text>
                        </HStack>
                        
                        
                    </VStack>
                    
                    
                    <VStack margin={"auto"}>
                        <Text  fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Price:<span style={{color:"#BD492B",fontWeight:"bold"}}>₹{data.price}</span></Text>
                        
                    </VStack>
                    
                
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Color: <span style={{color:"black",fontWeight:"bold"}}></span></Text>
                        
                    </VStack>
                
                    
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} style={{}}>Size:<span style={{color:"#949696",fontSize:"13px"}}>  Select Size</span></Text>
                        
                    </VStack>
                    
                    
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} style={{}}>Fit:<span style={{color:"#949696"}}> True to size. Order usual size<ChevronDownIcon fontSize={"20px"}></ChevronDownIcon></span></Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}><ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>Size Chart</Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Product Details</Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} style={{}}>Material Composition:<span style={{color:"#949696"}}> 60% Cotton 40% Polyester</span></Text>
                        
                        
                    </VStack>
                    
            
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Style:<span style={{color:"#949696"}}>Blouson</span></Text>
                        
                    </VStack>
                    
                    
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Neck Style:<span style={{color:"#949696"}}>Hooded Neck</span></Text>
                        
                    </VStack>
                    
                
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Pattern:<span style={{color:"#949696"}}>Solid</span></Text>
                        
                    </VStack>
                    
                    <VStack margin={"auto"}>


                    <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} fontWeight={"bold"} p={"20px"}>About this Item</Text>
                    </VStack>
                    <VStack margin={"auto"}>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Occasion : <span style={{color:"#949696"}}>Casual</span></Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Product Type : <span style={{color:"#949696"}} >Sweatshirt</span></Text>
                        <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}}>Pattern : <span style={{color:"#949696"}}>Solid</span></Text>
                    </VStack>
                    
                    <VStack margin={"auto"}>

                    <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} fontWeight={"bold"} fontSize={"1rem"} p={"20px"}>Description</Text>
                    </VStack>
                <VStack>
                    <Text fontSize={{base:"9px",sm:"11px",md:"14px",lg:"18px"}} fontWeight={"bold"} color={"#007AA0"} ><ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>See more</Text>
                    </VStack>

                    

                


                </Box>
                
                <Box style={{height:"120vh", width:"20%"}}>
                    

                    <Box height={{base:"100px",sm:"130px",md:"160px",lg:"180px"}}  margin={"auto"} style={{border:"1px solid #D5D9D9",width:"80%",borderRadius:"10px"}}>
                        <VStack marginTop={"20px"}>
                            <Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} >To buy ,select Size</Text>

                            <Button size={{base:"5px",sm:"9px",md:"11px",lg:"15px"}} fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} onClick={addtocart}   _hover={"#F7CA00"} color={"#0F1111"} borderRadius={"10px"} h={{base:"15px",sm:"18px",md:"21px",lg:"25px"}} w={"100%"} backgroundColor={"#F7CA00"}>Add to Cart</Button>
                            
                            <hr />
                            <Button fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} color={"#24113C"} border={"1px solid black"} borderRadius={"3px"} h={{base:"15px",sm:"18px",md:"21px",lg:"25px"}} w={"100%"} backgroundColor={"#F0F2F4"}>Add to Wish List</Button>
                        </VStack>

                    </Box>
                    
                    <VStack marginTop={"20px"} marginRight={"20px"} margin={"auto"}>
                        <Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} >Have one to sell?</Text>
                        <Button h={{base:"15px",sm:"18px",md:"21px",lg:"25px"}} margin={"auto"} w={"100%"}  fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} border={"0.5px solid grey"} backgroundColor={"white"}>Sell on Amazon</Button>
                    </VStack>
                </Box>
                </Flex>
            </Box>
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
            <Box  w={"100%"}  padding={"20px"}>
                <VStack w={"100%"} margin={"auto"}>
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}} p={"20px"} style={{fontWeight:"bold"}}>Special offers and product promotions</Text>
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}fontWeight={"bold"}>colour: BLACK | Size: XL <span style={{color:"grey"}}>Promotions can vary depending on colour/size.</span></Text>
                    
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}> Buy 3 Get 5% Off, Buy 4 Get 10% Off <span style={{color:"grey"}}>Here&apos;s how</span> </Text>
                    
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}> 5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000 <span style={{color:"grey"}}>Here&apos;s how</span> </Text>
            
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}> No cost EMI available on select cards. Please check &apos;EMI options&apos; above for more details. <span style={{color:"grey"}}>Here&apos;s how</span> </Text>
                    
                    <Text fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}> Get GST invoice and save up to 28% on business purchases. Sign up for free <span style={{color:"grey"}}>Here&apos;s how</span> </Text>

                </VStack>
                
            </Box>
            <Text fontSize={{base:"6px",sm:"9px",md:"12px",lg:"15px"}} padding={"25px"} fontWeight={"bold"}> Get GST invoice and save up to 28% on business purchases. Sign up for free <span style={{color:"grey"}}>Here&apos;s how</span> </Text>
            {/* <Carousel/> */}
            <Box h={"100vh"} w={"100%"} p={"20px"}>
            <VStack w={"100%"} margin={"auto"}>
                    <Text fontSize={"20px"} p={"20px"} style={{fontWeight:"bold"}}>Products Details</Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Date First Available : <span style={{color:"grey"}}>13 June 2018</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Manufacturer  :  <span style={{color:"grey"}}>Aditya Birla Fashion and Retail Limited</span></Text>
                    <Text fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Product Dimension : <span style={{color:"grey"}}>  28 x 27 x 2 cm; 350 Grams</span></Text>
                    <Text   fontWeight={"bold"}color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>ASIN : <span style={{color:"grey"}}>B07DPTGB8Z</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Item model number : <span style={{color:"grey"}}>ASSTORGPX52409S_Navy 19-3810 TCX</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Department : <span style={{color:"grey"}}>Men</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Manufacturer : <span style={{color:"grey"}}>Aditya Birla Fashion and Retail Limited, SPACE FASHIONS PVT LTD,Phase VI,,Focal Point-141010,Ludhiana,Punjab,India</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Packer  : <span style={{color:"grey"}}>SPACE FASHIONS PVT LTD,Phase VI,,Focal Point-141010,Ludhiana,Punjab,India</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Item Weight : <span style={{color:"grey"}}>350 g</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Item Dimensions LxWxH : <span style={{color:"grey"}}>28 x 27 x 2 Centimeters</span></Text>
                    <Text  fontWeight={"bold"} color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Net Quantity  : <span style={{color:"grey"}}>1 count</span></Text>
                    <Text  fontWeight={"bold"}  color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Included Components : <span style={{color:"grey"}}>1-Shirt</span></Text>
                    <Text  fontWeight={"bold"}  color={"black"}  fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Generic Name : <span style={{color:"grey"}}>Sweatshirt</span></Text>
                    <Text  fontWeight={"bold"} color={"black"} fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}>Best Sellers Rank: : <span style={{color:"grey"}}>#6 in Clothing & Accessories (See Top 100 in Clothing & Accessories)</span></Text>
                    <Text  fontWeight={"bold"} color={"black"} fontSize={{base:"8px",sm:"9px",md:"12px",lg:"15px"}}> Customer Reviews: : <span style={{color:"grey"}}>11,403 ratings</span></Text>
                    

                </VStack>
                </Box>
                {/* <Carousel/> */}
                <Box>
                <Text fontSize={"20px"} p={"20px"} style={{fontWeight:"bold"}}>From the manufacturer</Text>
                <VStack>
                    <Image src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/43333131-f5c0-4265-923e-b2cfbbcbd131.__CR0,0,4042,2500_PT0_SX970_V1___.png'></Image>
                    <Image src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/8d472d6e-839f-4e9a-bc65-0050e972f549.__CR0,0,4042,2500_PT0_SX970_V1___.png'></Image>
                    <Image src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/4d162edf-4ec7-4ba9-b119-ff79f75d3732.__CR0,0,4043,2501_PT0_SX970_V1___.png'></Image>
                </VStack>


                </Box>
                <Box>
                {/* <Text fontSize={"20px"} p={"20px"} style={{fontWeight:"bold"}}>Customers who viewed this item also viewed</Text> */}
            

                {/* <Carousel/> */}

                </Box>
                <Box>
                {/* <Text fontSize={"20px"} p={"20px"} style={{fontWeight:"bold"}}>Best Sellers in Men&apos;s Clothing</Text> */}
            

                {/* <Carousel/> */}

                </Box>
                <Box>
                {/* <Text fontSize={"20px"} p={"20px"} style={{fontWeight:"bold"}}>Related to items you&apos;ve viewed</Text> */}
            

                {/* <Carousel/> */}

                </Box>

                <Box p={"120px"}>
                    <VStack>
                        
                        <Text fontSize={"17px"}>See personalized recommendations</Text>
                        <Button _hover={"#FFC637"} color={"black"} bg={"#FFC637"}>Sign In</Button>
                        <Text>New Customer ? <span style={{color:"#007AA0",cursor:"pointer"}}>start here</span></Text>


                    </VStack>
                </Box>
                 {/* <Footer1/>
                <Footer2/>
                <Footer3/>
                <Footer4/> */}

            
        </>
    )
}

export default ProductDetail