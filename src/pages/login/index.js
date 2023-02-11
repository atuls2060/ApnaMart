import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, HStack, Divider, Checkbox, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { loginUser } from '@/redux/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { auth } from '@/utils/firebase'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPasseord] = useState("")
    const [toggleView, setToggleView] = useState(true)

    const dispatch = useDispatch()
    const { errorMessage, data: { isAuthenticated } } = useSelector((store) => store.authManager)
    const router = useRouter()
    const currentUser = auth.currentUser
    const toast = useToast();

    const handleSubmit = () => {
        if (!email || !password) {
            alert("All field required")
            return
        }
        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
        if (currentUser !== null) {

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

   


    return (
        toggleView ? <EmailView toggleView={setToggleView} email={email} onChange={(value) => setEmail(value)} />
            : <PasswordView onSubmit={handleSubmit} toggleView={setToggleView} email={email} password={password} disable={password===""}  onChange={(value) => setPasseord(value)} />
    )
}

const EmailView = ({ toggleView, email, onChange }) => {
    const disable = email=== "" 
    return <Container mt="40px"  minH="100vh">
        <Card border="1px solid #e4e4e4">
            <CardBody>
                <Heading fontWeight="medium">Sign In</Heading>

                <FormControl mt="4">
                    <FormLabel>Email or mobile phone number</FormLabel>
                    <Input value={email} onChange={(e) => onChange(e.target.value)} />
                </FormControl>
                <Button
                    mt="4"
                    type='submit'
                    w='100%'
                    _hover={{
                        bg: "#EFBE42"
                    }}
                    onClick={() => toggleView(false)}
                    pointerEvents={disable ? "none" : "all"}
                    bg={disable ? "lightgray" : "#ffe100"} 
                >
                    Continue
                </Button>
                <Text fontSize="14px" mt="4">By continuing, you agree to Amazon&apos;s Conditions of Use and Privacy Notice.</Text>
                <Link href="/"><Text fontSize="14px" mt="5">Need Help?</Text></Link>
            </CardBody>
        </Card>
        <HStack my="4" justifyContent="space-between">
            <Divider width="30%" height="1px" bg="#e4e4e4" />
            <Text fontSize="13px">New to Apna Mart ?</Text>
            <Divider width="30%" height="1px" bg="#e4e4e4" />
        </HStack>
        <Link href="/register">
            <Button
                w='100%'
                bg="#F3F3F3"
                border="1px solid gray"
                _hover={{
                    bg: "#DEE1E6"
                }}
            >
                Create your Apna account
            </Button></Link>
    </Container>
}
const PasswordView = ({ toggleView, email, password, onChange, onSubmit,disable }) => {
   
    const [showPassword, setShowPassword] = useState(false)

    return <Container mt="20px">
        <Card border="1px solid #e4e4e4">
            <CardBody>
                <Heading fontWeight="medium">Sign In</Heading>
                <HStack my="4"><Text fontSize="14px">{email}</Text>
                    <Text onClick={() => toggleView(true)} cursor="pointer" fontSize="14px" color="teal">Change</Text>
                </HStack>
                <FormControl mt="4">
                    <FormLabel>
                        <HStack justifyContent="space-between">
                            <Text>Password</Text>
                            <Link href="/">Forgot Password</Link>
                        </HStack>
                    </FormLabel>
                    <InputGroup>
                        <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => onChange(e.target.value)} />
                        <InputRightElement onClick={() => setShowPassword(!showPassword)}>

                            {
                                showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
                            }

                        </InputRightElement></InputGroup>
                </FormControl>
                <Button
                    mt="4"
                    type='submit'
                    w='100%'
                    _hover={{
                        bg: "#EFBE42"
                    }}
                    onClick={onSubmit}
                    pointerEvents={disable ? "none" : "all"}
                    bg={disable ? "lightgray" : "#ffe100"} 
                >
                    Continue
                </Button>
                <HStack my="4">
                    <Checkbox />
                    <Text fontSize="14px" mt="4">Keep me signed in. Details</Text>
                </HStack>
            </CardBody>
        </Card>
    </Container>
}

export default LoginPage