import { Grid, GridItem ,Box,Button ,Text,Center } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"
const Footer4 = () => {
  return (
    <Box w="100%" backgroundColor="#131A22" p={5}>
    <Link href="/">
    <Box w="60%" margin="auto" >
       <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem>
                <Text  fontSize="12px" color="#DDDDDD">Abe Books</Text>
                <Text  fontSize="12px" color="#999999">Books , art</Text>
                <Text  fontSize="12px" color="#999999">& Collectibiles</Text>
            </GridItem>    

            <GridItem >
                <Text  fontSize="12px" color="#DDDDDD">Amazon Web Services</Text>
                <Text  fontSize="12px" color="#999999">Scalabe Cloud</Text>
                <Text  fontSize="12px" color="#999999">Computing Services</Text>
            </GridItem> 

            <GridItem >
               <Text   fontSize="12x" color="#DDDDDD">Audible</Text>
                <Text   fontSize="12px" color="#999999">Download</Text>
                <Text   fontSize="12px" color="#999999">Books</Text> 
            </GridItem>

            <GridItem>
               <Text   fontSize="12px" color="#DDDDDD">DPReview</Text>
                <Text  fontSize="12px" color="#999999">Digital</Text>
                <Text  fontSize="12px" color="#999999">Photography</Text>

            </GridItem>

            <GridItem >    
                <Text  fontSize="12px" color="#DDDDDD">IMDb</Text>
                <Text  fontSize="12px" color="#999999">Movies ,TV</Text>
                <Text  fontSize="12px" color="#999999">& Celebrities</Text>
            </GridItem>

            <GridItem >    
                <Text fontSize="12px" color="#DDDDDD">Shopbop</Text>
                <Text fontSize="12px" color="#999999">Designer</Text>
                <Text fontSize="12px" color="#999999">Fashion Brands</Text>
            </GridItem>

            <GridItem >
                <Text  fontSize="12px" color="#DDDDDD">Amazon Brands</Text>
                <Text  fontSize="12px" color="#999999">Everything for</Text>
                <Text  fontSize="12px" color="#999999">Your Business</Text>

            </GridItem>

            <GridItem >    
                <Text  fontSize="12px" color="#DDDDDD">Prime Now</Text>
                <Text  fontSize="12px" color="#999999">2- Hours Delivery</Text>
                <Text  fontSize="12px" color="#999999">On every Item</Text>
            </GridItem>

            <GridItem >    
                <Text  fontSize="12px" color="#DDDDDD">Amazon Prime Music</Text>
                <Text  fontSize="12px" color="#999999">90 millions songs ad-free</Text>
                <Text  fontSize="12px" color="#999999">Over 15 million podcasts episodes</Text>
            </GridItem>

       </Grid>

    </Box>

    <Box mt={4} p={4}>
         <Center  color='white' gap={8}>
                   <Text fontSize="12px" color="#DDDDDD">Condition of Use & sale</Text>
                   <Text fontSize="12px" color="#DDDDDD">Privacy Notice</Text>
                   <Text fontSize="12px" color="#DDDDDD">Interests-Based Ads</Text>
        </Center>
        <Center color='white' mt={2}>
                <Text fontSize="12px" color="#DDDDDD">© 1996-2023, Amazon.com, Inc. or its affiliates</Text>
        </Center>
     </Box>
     </Link>
</Box>
  )
}

export default Footer4