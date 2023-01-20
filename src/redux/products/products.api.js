import axios from "axios";

export const getProductsApi = async (category,page) => {
    let res = await axios.get(`http://localhost:8080/products?category=${category}&_page=${page}&_limit=12`);
    return res.data;
  };