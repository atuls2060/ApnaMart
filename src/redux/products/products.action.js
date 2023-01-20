import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR} from "./products.types";
import { getProductsApi } from "./products.api";

export const getProducts=(category,page)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let data = await getProductsApi(category,page);
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    } catch(e){
        dispatch({type:GET_PRODUCTS_ERROR})
    }

}
// export const getProductsMen=()=>async(dispatch)=>{
//     dispatch({type:GET_PRODUCTS_LOADING})
//     try{
//         let data = await getProductsApi("mens");
//         dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
//     } catch(e){
//         dispatch({type:GET_PRODUCTS_ERROR})
//     }

// }
// export const getProductsKid=()=>async(dispatch)=>{
//     dispatch({type:GET_PRODUCTS_LOADING})
//     try{
//         let data = await getProductsApi("kids");
//         dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
//     } catch(e){
//         dispatch({type:GET_PRODUCTS_ERROR})
//     }

// }