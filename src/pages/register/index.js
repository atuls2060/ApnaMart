import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, Divider, FormHelperText, Alert, InputGroup, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, InputLeftElement, InputRightElement, AlertIcon, AlertTitle, AlertDescription, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { createAccount } from '@/redux/auth/auth.action'
import { auth } from '@/utils/firebase'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasseord] = useState("")
    const currentUser = auth.currentUser
    const toast = useToast();

    const dispatch = useDispatch()
    const { errorMessage, data: { isAuthenticated } } = useSelector((store) => store.authManager)
    const router = useRouter()

  

    const handleSubmit = () => {
        if (!name || !email || !password) {
            alert("All field required")
            return
        }
        dispatch(createAccount({ name, email, password }))
    }

    useEffect(() => {
        if (currentUser !== null && currentUser.displayName !== null) {
           router.replace("/")   
        }
        if (errorMessage != "") {
            toast({
                title: 'Error',
                position: 'top',
                description: errorMessage.split(":")[1],
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }, [currentUser,errorMessage])

    const disable = password === ""

    return (
        <Container mt="40px" minH="100vh">
            <Card border="1px solid #e4e4e4">
                <CardBody>
                    <Heading fontWeight="medium">Create Account</Heading>
                    <FormControl mt="4">
                        <FormLabel>Your name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name " />
                    </FormControl>
                    <FormControl mt="4">
                        <FormLabel>Email</FormLabel>
                        <HStack spacing="4">
                            {/* <NumberInput maxW="80px" value="+91">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput> */}
                            <Input name={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </HStack>
                    </FormControl>
                    <FormControl mt="4">
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPasseord(e.target.value)} placeholder="At least 6 characters" />
                            <InputRightElement onClick={() => setShowPassword(!showPassword)}>

                                {
                                    showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
                                }

                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText fontSize="13px">Passwords must be at least 6 characters.</FormHelperText>
                    </FormControl>
                    <Text fontSize="14px" mt="4">By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply</Text>
                    <Button
                        mt="4"
                        type='submit'
                        w='100%'
                        _hover={{
                            bg: "#EFBE42"
                        }}
                        onClick={handleSubmit}
                        pointerEvents={disable ? "none" : "all"}
                        bg={disable ? "lightgray" : "#ffe100"} 
                    >
                        Continue
                    </Button>
                    <Divider mx="auto" my="5" w="90%" height="1px" bg="#e4e4e4" />
                    <Text fontSize="13px" mt="4">Already have an account? <Link href="/login">Sign in</Link> Buying for work? Create a free business account</Text>
                    <Text fontSize="13px" mt="4">By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export default RegisterPage