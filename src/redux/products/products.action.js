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
    high
  ) =>
  async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      let url = `https://amazon-t415.onrender.com/products?category=${category}`;
      const res = await axios.get(url);
      let products = res.data;

      // Filter by keywords
      if (jeans) {
        products = products.filter((product) => product.desc.includes(jeans));
      }
      if (shirt) {
        products = products.filter((product) => product.desc.includes(shirt));
      }
      if (tshirt) {
        products = products.filter((product) => product.desc.includes(tshirt));
      }
      if (jacket) {
        products = products.filter((product) => product.desc.includes(jacket));
      }
      if (sweat) {
        products = products.filter((product) => product.desc.includes(sweat));
      }
      if (Amazon) {
        products = products.filter((product) => product.title.includes(Amazon));
      }
      if (Reebok) {
        products = products.filter((product) => product.title.includes(Reebok));
      }
      if (Puma) {
        products = products.filter((product) => product.title.includes(Puma));
      }
      if (levi) {
        products = products.filter((product) => product.title.includes(levi));
      }
      if (polo) {
        products = products.filter((product) => product.title.includes(polo));
      }
      if (Raymond) {
        products = products.filter((product) =>
          product.title.includes(Raymond)
        );
      }

      // Filter by price range
      if (low && high) {
        products = products.filter(
          (product) => product.price >= low && product.price <= high
        );
      } else if (low) {
        products = products.filter((product) => product.price >= low);
      } else if (high) {
        products = products.filter((product) => product.price <= high);
      }

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (e) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
