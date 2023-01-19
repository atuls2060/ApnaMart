import axios from "axios"
export const loginUserApi = async (cred) => {
    const response = await axios.post("https://reqres.in/api/login", cred)
    return response.data
}