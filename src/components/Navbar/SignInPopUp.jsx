import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import Styles from "./Navbar.module.css"
import { useRouter } from 'next/router'
import { auth } from '@/utils/firebase'
import { signOut } from "firebase/auth";


const SignInPopUp = ({ togglePopUp }) => {
    const router = useRouter();
    const currentUser = auth.currentUser

    const handleClick = () => {
        if (currentUser !== null) {
            signOut(auth).then(() => {
                localStorage.removeItem("username")
                router.push("/")
           
            }).catch((error) => {
                // An error happened.
            });
        } else {
            router.push("/login")
        }
    }

    return (
        <Box position="absolute" zIndex="5" p="2" bg="white" top="56px" onMouseEnter={() => togglePopUp(true)} onMouseLeave={() => togglePopUp(false)}>
           < Box className={Styles.nav_link_arrow_top}></Box>
            <Button
                mt="4"
                type='submit'
                w='100%'
                bg="#F3A847"
                _hover={{
                    bg: "#EFBE42"
                }}
                onClick={handleClick}
            >
                {
                    currentUser !== null ? "logout" : "  Sign in"
                }
            </Button>
        </Box>
    )
}

export default SignInPopUp