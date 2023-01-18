import React, { useEffect } from 'react'
import Products from '@/components/Products/Products'

const ProductsPage = () => {
//  const getData = async()=>{
//   let res = await fetch("https://amazon24.p.rapidapi.com/api/category?country=IN");
//   res = await res.json()
//   console.log(res);
//  }
//  useEffect(()=>{
//   getData()
//  },[])
  return <Products />
}

export default ProductsPage