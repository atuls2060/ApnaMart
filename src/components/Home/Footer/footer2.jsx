import React from 'react'
import { Grid, GridItem ,Box,Button ,Text } from '@chakra-ui/react'
import Link from "next/link"
const Footer2 = () => {
  return (
    <Box w="100%" backgroundColor="#232F3E" p={10}>
            <Link href="/">
        <Box w="60%" margin="auto" >
           <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4, 1fr)"}} gap={6}>
                <GridItem p={2}>
                    <Text p={1} fontSize="16px" color="#FFFF">Get To Know Us</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">About us</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Career</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Press Release</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Amazon Science</Text>
                </GridItem>

                <GridItem p={2}>
                   <Text p={1} fontSize="16px" color="#FFFF">Connect with us</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Facebook</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Twitter</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Instagram</Text>
                    
                </GridItem>

                <GridItem p={2}>
                   <Text  p={1} fontSize="16px" color="#FFFF">Make money with us</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Sell on Amazon</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">sale under Amazon Accelerator</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Protect and Build your Brand</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Amazon Global Selling</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Become an Affiliate</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Fullfillment by Amazon</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Advertise your Products</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Amazon Pay on merchants</Text>
                </GridItem>

                <GridItem p={2}>
                    <Text p={1} fontSize="16px" color="#FFFF">Let us help you</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Covid19 and India</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Your Account</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Return Centre</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">100% Purchase Protection</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Amazon App Download</Text>
                    <Text p={1} fontSize="14px" color="#FFFF">Help</Text>
                </GridItem>
           </Grid>

        </Box>
        </Link>
    </Box>
  )
}

export default Footer2