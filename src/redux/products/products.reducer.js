import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, RESET_PRODUCTS } from "./products.types";

const productInitalState = {
    loading: false,
    error: false,
    data: [],
    totalPages:0
};

export const productsReducer = (state = productInitalState, { type, payload }) => {

    switch (type) {
        case GET_PRODUCTS_LOADING:{
            return {
                ...state,loading:true
            }
        }
        case GET_PRODUCTS_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,loading:false,data:payload
            }
        }
        case RESET_PRODUCTS:{
            return{
              ...state,
              loading: false,
              error: false,
              data: [],
          
            }
          }

        default: {
            return state
        }
    }


};