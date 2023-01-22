import React from 'react'
import { Grid, GridItem ,Box,Button ,Text,Center,Image,Select,Divider  } from '@chakra-ui/react'
import Link from "next/link"
const Footer3 = () => {
  return (
    <Box  backgroundColor="#232F3E">
                <Divider/>
        <Box w="20%" m="auto" mb="20px" mt={4}>
           
              <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem w='100%' mt={10} >
                    <Link href="/">
                                          <Image src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flook-your-best.appspot.com%2Fo%2FAmazon-clone%252Flogos%252Flogo.png%3Falt%3Dmedia%26token%3D0d097020-fb24-4bc4-9367-e9fbb75192b4&w=256&q=75" h="20px"/> 
                     </Link>
                    </GridItem>
                    <GridItem w='100%' mt={8}>
                            
                            <Select placeholder='English' color="#FFFF">
                                    <option value='option1'>Hindi</option>
                                    <option value='option2'>Chinese</option>
                                    <option value='option3'>Spanish</option>
                             </Select>
                    </GridItem> 
            </Grid>
           
        </Box>
        <Box>
            <Link href="/">
               <Center  color='"#FFFF"' p={1} gap={4}>
                  <Text fontSize="14px">Australia</Text>
                  <Text fontSize="14px">Brazil</Text>
                  <Text fontSize="14px">China</Text>
                  <Text fontSize="14px">Spain</Text>
                  <Text fontSize="14px">Cannada</Text>
                  <Text fontSize="14px">India</Text>
                  <Text fontSize="14px">Singapore</Text>
                  <Text fontSize="14px">France</Text>
                  <Text fontSize="14px">Turkey</Text>
                  <Text fontSize="14px">Poland</Text>
               </Center>
               </Link>
        </Box>
        <Box>
        <Link href="/">
        <Center  color='"#FFFF"' p="0 10px 20px 10px" gap={4}>
                  <Text fontSize="14px">United States</Text>
                  <Text fontSize="14px">United Kingdom</Text>
               </Center>
               </Link>
        </Box>
       
    </Box>
  )
}

export default Footer3