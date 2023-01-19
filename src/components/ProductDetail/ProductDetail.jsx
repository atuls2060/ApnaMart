import React from 'react'
import {Box,Flex,Text,Image, VStack, HStack, Button} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"


const ProductDetail = () => {
 
    return (
        <>
        
            <Box  style={{height:"50px" ,width:"100%",backgroundColor:"#F7F8F8"}}>
                <Flex style={{justifyContent:"space-around" ,alignItem:"center"}}>
                    <Image style={{height:"50px", width:"40px"}} src="https://m.media-amazon.com/images/I/319kt4GvHwL._AC_SR320,400_.jpg"></Image>
                    <Text style={{marginTop:"10px"}}>United Colors of Benetton Men Printed Sweatshirt</Text>
                    <Text style={{fontSize:"20px" ,color:"#AE2E0E",fontWeight:"bold"}}>₹1,190 <span style={{color:"#2992BD",fontSize:"16px" ,fontWeight:"bold"}}>prime</span></Text>
                </Flex>
            </Box>
            <Box >
                <Flex justifyContent={"space-between"}>
                <Text style={{textDecoration:"underline",cursor:"pointer"}}><span>-</span>Back to result</Text>
                <Text style={{textDecoration:"underline",cursor:"pointer"}}>Sponsored</Text>
                </Flex>
            </Box>
            <Box style={{height:"120vh",  width:"100%"}}>
                <Flex>
                <Box  style={{height:"120vh",  width:"40%"}}>
                    <VStack style={{marginRight:"80%" ,marginTop:"20px"}}>
                    {/* <Box style={{height:"12vh", width:"40%",border:"1px solid red"}} ></Box>
                    <Box style={{height:"12vh", width:"40%",border:"1px solid red"}} ></Box>
                    <Box style={{height:"12vh",  width:"40%",border:"1px solid red"}} ></Box>
                    <Box style={{height:"12vh", width:"40%",border:"1px solid red"}} ></Box>
                    <Box style={{height:"12vh", width:"40%",border:"1px solid red"}} ></Box>
                    <Box style={{height:"12vh", width:"40%",border:"1px solid red"}} ></Box> */}
                    </VStack>
                    <HStack></HStack>
                    <Image style={{height:"500px", marginLeft:"20%"}} src="https://m.media-amazon.com/images/I/319kt4GvHwL._AC_SR320,400_.jpg"></Image>
                    
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <Box padding={"10px"} border={"3px solid #F7F8F8"} style={{height:"120vh", width:"45%",}}>
                    
                    <VStack>
                        <Text style={{color:"#007AA0",fontSize:"16px",fontWeight:"bold"}}>Visit the Allen Solly Store</Text>
                        <Text style={{fontSize:"22px",fontWeight:"bold"}}>Allen Solly Men Cotton Hooded Neck Sweatshirt</Text>
                        <HStack><span><Image style={{height:"60px"}} src="https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?b=1&s=170667a&w=0&k=20&c=0oTDNjPGdClD5HtUDPXp7FkPFh5aNsY0dzKFvn6siO8="></Image></span><Text style={{color:"#007AA0",fontSize:"15px",fontWeight:"bold"}}>11,363 ratings</Text ><Text style={{color:"#007AA0",fontSize:"15px",fontWeight:"bold"}}>185 answered questions</Text>
                        </HStack>
                        <HStack><span><Button  style={{color:"#ffffff", width:"90%" ,height:"23px",backgroundColor:"#C45500"}}>#1 Best Seller</Button></span><Text style={{color:"#007AA0",fontSize:"15px",fontWeight:"bold"}}>in Men's Coats </Text ><Text style={{color:"#007AA0",fontSize:"15px",fontWeight:"bold"}}>Jackets & Vests</Text>
                        </HStack>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text>Price:<span style={{color:"#BD492B",fontWeight:"bold"}}> ₹850-₹930</span></Text>
                        <Text style={{fontSize:"13PX",fontWeight:""}}>inclusive of all taxes</Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text>Color: <span style={{color:"black",fontWeight:"bold"}}>BLACK</span></Text>
                        <Text style={{fontSize:"13PX",fontWeight:""}}>inclusive of all taxes</Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text style={{}}>Size:<span style={{color:"#949696",fontSize:"13px"}}>  Select Size</span></Text>
                        <Text style={{fontSize:"13PX"}}>inclusive of all taxes</Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text style={{}}>Fit:<span style={{color:"#949696"}}> True to size. Order usual size<ChevronDownIcon fontSize={"20px"}></ChevronDownIcon></span></Text>
                        <Text><ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>Size Chart</Text>
                        <Text>Product Details</Text>
                        <Text style={{}}>Material Composition:<span style={{color:"#949696"}}> 60% Cotton 40% Polyester</span></Text>
                        
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text>Style:<span style={{color:"#949696"}}>Blouson</span></Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text>Neck Style:<span style={{color:"#949696"}}>Hooded Neck</span></Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <VStack style={{marginRight:"400px"}}>
                        <Text>Pattern:<span style={{color:"#949696"}}>Solid</span></Text>
                        
                    </VStack>
                    <br />
                    <hr />
                    <Text fontWeight={"bold"} fontSize={"1rem"} p={"20px"}>About this Item</Text>
                    <VStack mr={"80%"}>
                        <Text>Occasion : <span style={{color:"#949696"}}>Casual</span></Text>
                        <Text>Product Type : <span style={{color:"#949696"}} >Sweatshirt</span></Text>
                        <Text>Pattern : <span style={{color:"#949696"}}>Solid</span></Text>
                    </VStack>
                    <br />
                    <hr />
                    <Text fontWeight={"bold"} fontSize={"1rem"} p={"20px"}>Description</Text>
                    <br />
                    <Text fontWeight={"bold"} color={"#007AA0"} fontSize={"15px"}><ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>See more</Text>

                    

    


                </Box>
                <Box style={{height:"120vh", width:"20%"}}>
                    

                    <Box  margin={"auto"} style={{height:"180px",border:"1px solid #D5D9D9",width:"80%",borderRadius:"10px"}}>
                        <VStack marginTop={"20px"}>
                            <Text fontSize={"16px"} >To buy ,select Size</Text>
                            <Button  _hover={"#F7CA00"} color={"#0F1111"} borderRadius={"10px"} h={"35px"} w={"80%"} backgroundColor={"#F7CA00"}>Add to Cart</Button>
                            
                            <hr />
                            <Button color={"#24113C"} border={"1px solid black"} borderRadius={"3px"} h={"35px"} w={"80%"} backgroundColor={"#F0F2F4"}>Add to Wish List</Button>
                        </VStack>

                    </Box>
                    
                    <VStack marginTop={"20px"} marginRight={"20px"}>
                        <Text fontSize={"16px"}>Have one to sell?</Text>
                        <Button border={"0.5px solid grey"} backgroundColor={"white"}>Sell on Amazon</Button>
                    </VStack>
                </Box>
                </Flex>
            </Box>
                    

            <Box>
                <VStack style={{marginRight:"80%"}}>
                    <Text style={{fontWeight:"bold"}}>Special offers and product promotions</Text>
                    <Text>colour: BLACK | Size: XL <span>Promotions can vary depending on colour/size.</span></Text>

                </VStack>
            </Box>
        </>
    )
}

export default ProductDetail