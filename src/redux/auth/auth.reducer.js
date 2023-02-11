import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types";
import { auth } from '@/utils/firebase'

const currentUser = auth.currentUser


export const authInitalState = {
  loading: false,
  data: {
    uid: currentUser !== null ? currentUser.uid:"",
    isAuthenticated: currentUser !== null,
    name:""
  },
  error: false,
  errorMessage:""
};

export const authReducer = (state = authInitalState, { type, payload }) => {

  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage:""
      }
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage:payload.errorMessage
      }
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          uid: payload.uid,
          isAuthenticated: true,
          name:payload.name
        },
        errorMessage:payload.errorMessage
      }
    }
    default: {
      return state
    }
  }

};