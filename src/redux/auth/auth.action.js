import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types"

const { loginUserApi } = require("./auth.api")


export const loginUser = (cred) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        const data = await loginUserApi(cred)
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data })
    } catch (error) {
        console.log("error", error)
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}
const createAccount = (cred) => (dispatch) => {

}
const logoutUser = () => (dispatch) => {

}