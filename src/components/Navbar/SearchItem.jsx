import { HStack, Img, Text } from "@chakra-ui/react"

const SearchItem =  ({ url, title }) => {
    return <>
        <HStack spacing={5} p={2} borderRadius={"4px"} w={"100%"} _hover={{ backgroundColor: "#f4f4f4" }} cursor={"pointer"} align={"start"}>
            <Img maxH="50px" width="50px" src={url} alt="" />
            <Text color="black" noOfLines={1}>{title}</Text>
        </HStack>
    </>
}
export default SearchItem