import axios from "axios";

export const getProductsApi = async (category,page,limit) => {
    let res = await axios.get(`http://localhost:8080/products?category=${category}&_page=${page}&_limit=${limit}`);
    return res.data;
  };