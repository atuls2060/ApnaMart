
 import { useRouter } from 'next/router'

import React, { useEffect,useState } from 'react'
import Pages from '../../components/Categories/pageComponent/pages'
import Filter from "../../components/Categories/pageComponent/filter"
 import Pagination from '../../components/Categories/pageComponent/pagination'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '@/redux/products/products.action'
import ImgSlider from '@/components/Categories/Slider/imgSlider'


const Products = () => {
  const {loading,error,data} = useSelector((state)=>state.productsManager)
  const [page,setPage] = useState(1);
  const router = useRouter()
   const {category} = router.query
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts(category,page))
  },[category,page])

  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>Error...</h1>
  }
  return (
    <div>
      <ImgSlider/>
      
        <div style={{display:"flex"}}>
             <div style={{width:"20%"}}>
              <Filter/>
              </div>
             <div style={{width:"85%"}}>
             <div>
          <select style={{float:"right",marginTop:"20px",border:"1px solid black"}} value="jhk" name="sort by: Featured" id="">
            <option value="Featured">Sort by: Featured</option>
            <option value="Price:Low to High">Price:Low to High</option>
            <option value="Price:High to Low">Price:High to Low</option>
            <option value="Avg.Customer Review">Avg.Customer Review</option>
            <option value="Newest Arrivals">Newest Arrivals</option>
          </select>
          </div>
          <div style={{marginTop:"60px"}}>
          <h1 style={{fontWeight:"bold",fontSize:"20px"}}>RESULTS</h1>
          <p style={{color:"grey"}}>Price and other details may vary based on product size and colour.</p>
          </div>
          <div style={{display:"grid",width:"100%",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",marginTop:"20px"}} >
            {data.map((el)=><Pages key={el.id} {...el}/>)}             
          </div>
              <Pagination page={page} onPageChange={setPage}/>
             </div>
        </div>
    </div>
  )
  }


export default Products