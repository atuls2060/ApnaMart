import axios from "axios"
export const loginUserApi = async (cred) => {
    const res = await axios.post("http://localhost:8080/login", cred)
    return res.data
}

export const createAccountApi = async (cred) => {
    const res = await axios.post("http://localhost:8080/register", cred)
    return res.data
}