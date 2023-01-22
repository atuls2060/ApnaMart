import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const SignInPopUp = ({togglePopUp}) => {
    const router = useRouter();
    return (
        <Box position="absolute" zIndex="5" p="2" bg="white" top="56px"  onMouseEnter={() => togglePopUp(true)} onMouseLeave={() => togglePopUp(false)}>
            <Button
                mt="4"
                type='submit'
                w='100%'
                bg="#F3A847"
                _hover={{
                    bg: "#EFBE42"
                }}
                onClick={() => router.push("/login")}
            >
                Sign in
            </Button>
        </Box>
    )
}

export default SignInPopUp