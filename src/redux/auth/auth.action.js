import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types"

const { loginUserApi, createAccountApi } = require("./auth.api")


export const loginUser = (cred) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        const data = await loginUserApi(cred)
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}
export const createAccount = (cred) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        const data = await createAccountApi(cred)
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}
const logoutUser = () => (dispatch) => {

}