import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, Button, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure, Box, Heading, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRef } from "react"
import { IoCheckmarkDoneCircleOutline, IoMdDoneAll } from "react-icons/io"

const Success = ({ click }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const router = useRouter();
    useEffect(() => {
        if (click) {
            onOpen()
        }
    }, [click])


    const redirect = () => {
        onClose()
        router.push("/")
    }

    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent textAlign="center">
                    <Box m={4}>
                        <Flex justifyContent="center" alignItems="center" textAlign="center" m="auto" width="80px" height="80px" borderRadius="50%" border="2px solid green" >
                            <IoMdDoneAll size="51px" color="green" />
                        </Flex>
                        <Heading mt={5} color="green" size="md">Order Placed Successfully</Heading>
                    </Box>
                    <AlertDialogBody>
                    Thank you so much for shopping with us.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button bg={"#f3a847"} _hover={{ backgroundColor: "#c08438" }} width="100%"  onClick={redirect}>
                            Shop More
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default Success