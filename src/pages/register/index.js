import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, Divider, FormHelperText, InputLeftAddon, InputGroup, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, InputLeftElement } from '@chakra-ui/react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { createAccount } from '@/redux/auth/auth.action'
import { auth } from '@/utils/firebase'

const RegisterPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasseord] = useState("")
    const currentUser = auth    .currentUser

    const dispatch = useDispatch()
    const { data: { isAuthenticated } } = useSelector((store) => store.authManager)
    const router = useRouter()

    const handleSubmit = () => {
        if (!name || !email || !password) {
            alert("All field required")
            return
        }
        dispatch(createAccount({ name, email, password }))
    }

    useEffect(() => {
        if (currentUser !== null) {
            router.replace("/")
        }
    }, [currentUser])


    return (
        <Container mt="20px">
            <Card border="1px solid #e4e4e4">
                <CardBody>
                    <Heading fontWeight="medium">Create Account</Heading>
                    <FormControl mt="4">
                        <FormLabel>Your name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name " />
                    </FormControl>
                    <FormControl mt="4">
                        <FormLabel>Mobile number</FormLabel>
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
                        <Input value={password} onChange={(e) => setPasseord(e.target.value)} placeholder="At least 6 characters" />
                        <FormHelperText fontSize="13px">Passwords must be at least 6 characters.</FormHelperText>
                    </FormControl>
                    <Text fontSize="14px" mt="4">By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply</Text>
                    <Button
                        mt="4"
                        type='submit'
                        w='100%'
                        bg="#F3A847"
                        _hover={{
                            bg: "#EFBE42"
                        }}
                        onClick={handleSubmit}
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