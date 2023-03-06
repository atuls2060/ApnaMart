import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR} from "./products.types";
import axios from "axios";

export const getProducts =
  (
    category,
    jeans,
    shirt,
    tshirt,
    jacket,
    sweat,
    Amazon,
    Reebok,
    Puma,
    levi,
    polo,
    Raymond,
    low,
    high,
  ) =>
  async (dispatch) => {
    
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}`;
      if (low || high) {
        url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&price_gte=${low}&price_lte=${high}`;
      } else {
        url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}`;
      }


      if((jeans||shirt||tshirt||jacket||sweat)&&(Amazon||Reebok||Puma||levi||polo||Raymond)){
        if(low||high){
         url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&desc2=${jeans}&desc2=${shirt}&desc2=${tshirt}&desc2=${jacket}&desc2=${sweat}&title=${Amazon}&title=${Reebok}&title=${Puma}&title=${levi}&title=${polo}&title=${Raymond}&price_gte=${low}&price_lte=${high}`;
        }else{
         url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&desc2=${jeans}&desc2=${shirt}&desc2=${tshirt}&desc2=${jacket}&desc2=${sweat}&title=${Amazon}&title=${Reebok}&title=${Puma}&title=${levi}&title=${polo}&title=${Raymond}`;
        }
      }

      if (
        (jeans || shirt || tshirt || jacket || sweat) &&!
        (Amazon || Reebok || Puma || levi || polo || Raymond)
      ) {
        if (low || high) {
          url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&desc2=${jeans}&desc2=${shirt}&desc2=${tshirt}&desc2=${jacket}&desc2=${sweat}&price_gte=${low}&price_lte=${high}`;
        } else {
          url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&desc2=${jeans}&desc2=${shirt}&desc2=${tshirt}&desc2=${jacket}&desc2=${sweat}`;
        }
      }

      if (
        !(jeans || shirt || tshirt || jacket || sweat) &&
        (Amazon || Reebok || Puma || levi || polo || Raymond)
      ) {
        if (low || high) {
          url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&title=${Amazon}&title=${Reebok}&title=${Puma}&title=${levi}&title=${polo}&title=${Raymond}&price_gte=${low}&price_lte=${high}`;
        } else {
          url = `https://happy-moccasins-goat.cyclic.app/products?category=${category}&title=${Amazon}&title=${Reebok}&title=${Puma}&title=${levi}&title=${polo}&title=${Raymond}`;
        }
      }
      let res = await fetch(url)
      res = await res.json()
      console.log(res)
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };