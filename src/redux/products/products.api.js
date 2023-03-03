import axios from "axios";

export const getProductsApi = async (category) => {
    let res = await axios.get(`https://amazon-t415.onrender.com/products?category=${category}`);
    return res.data;
  };

  export const searchProductsApi = async (searchKeyword) => {
    let res = await axios.get(`https://amazon-t415.onrender.com/products?q=${searchKeyword}&_limit=12`);
    return res.data;
  };