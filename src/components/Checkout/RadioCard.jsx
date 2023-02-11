import { Box, useRadio,Image } from "@chakra-ui/react"

const RadioCard = (props)=> {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: '#e4e4e4',
            color: 'white',
            borderColor: '#e4e4e4',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
       {
        props.children
       }
        </Box>
      </Box>
    )
  }

  export default RadioCard
  