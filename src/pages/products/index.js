
 import { useRouter } from 'next/router'

import React, { useEffect,useState } from 'react'
import Pages from '../../components/Categories/pageComponent/pages'
import Filter from "../../components/Categories/pageComponent/filter"
 import Pagination from '../../components/Categories/pageComponent/pagination'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '@/redux/products/products.action'
import ImgSlider from '@/components/Categories/Slider/imgSlider'
import styles from "../../components/Categories/pageComponent/page.module.css"



const Products = (props) => {
  const {loading,error,data} = useSelector((state)=>state.productsManager)
  // console.log(data)
  // const [limit,setLimit] = useState(12)
  const [payOnDelivery, setPayOnDelivery] = useState(false);
  const [raymond,setRaymond] = useState(false)
  const [levi, setlevi] = useState(false)
  const [puma, setpuma] = useState(false)
  const [nike, setnike] = useState(false)
  const [reebok, setreebok] = useState(false)
  const [amazon, setamazon] = useState(false)
  const [us, setus] = useState(false)
  const [item,setItem] = useState([])
  const [page,setPage] = useState(1)
  const router = useRouter()
   const category = props.category;
  const dispatch=useDispatch()
  const limit =12
  useEffect(()=>{
    setPage(1);
    setPayOnDelivery(false)
  },[category])
  useEffect(()=>{
    dispatch(getProducts(category,page,limit))
  },[category,page,limit])
//  let payData;
  const handleChange1 = ()=>{
    setPayOnDelivery(!payOnDelivery)
      let payData= data.filter((items)=>items.base)
      setItem(payData)
  }
  let payData;
  const handleChange2=()=>{
    // console.log(e.target.checked)
    setRaymond(!raymond)
      payData= data.filter((items)=> items.title==="Raymond")
      setItem([...item,...payData])
  }
  const handleChange3=()=>{
    //  setlevi(!levi)
   if(!puma){
      let payData= data.filter((items)=>items.title==="Levi's")
      setItem([...item,...payData])
      setlevi(true)
    }else{
      let payData= data.filter((items)=>items.title!=="Levi's")
      setItem([...item,...payData])
      setlevi(false)
    }
  }
  const handleChange4=()=>{
    setpuma(!puma)
    if(puma){
      let payData= data.filter((items)=>items.title==="Puma")
      setItem([...item,...payData])
    }else{
      let payData= data.filter((items)=>items.title!=="Puma")
      setItem([...item,...payData])
    }
   
  }
  
  const handleChange6=()=>{
    setreebok(!reebok)
   let payData= data.filter((items)=>items.title==="Reebok")
   setItem([...item,...payData])
  }
  const handleChange7=()=>{
    setamazon(!amazon)
   let payData= data.filter((items)=>items.title==="Amazon Brand - Symbol")
   setItem(payData)
  }
  const handleChange8=()=>{
    setus(!us)
   let payData= data.filter((items)=>items.title==="U.S. POLO ASSN.")
   setItem(payData)
  }
  const handleClick=()=>{
    setus(!us)
    let payData= data.filter((items)=>items.desc.includes("Sweatshirt"))
   setItem(payData)
  }
  
const handleSort =(e)=>{
  let filter;
  if(e.target.value==="ltoh"){
    // setus(!us)
    filter = data.sort((a,b)=>a.price-b.price)
    console.log(filter)
    setItem(filter)
  }else if(e.target.value==="htol"){
    // setus(!us)
   filter= data.sort((a,b)=>b.price-a.price)
    setItem(filter)
  }
}
 

  if(loading){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto"}}>Loading...</h1>
  }
  if(error){
    return <h1>Error...</h1>
  }
  return (
    <div>
      <ImgSlider/>
      
        <div style={{display:"flex"}}>
             <div style={{width:"20%"}}>
              <Filter onclick={handleClick} onChange1={handleChange1}  onChange2={handleChange2} onChange3={handleChange3} onChange4={handleChange4}  onChange6={handleChange6} onChange7={handleChange7} onChange8={handleChange8}/>
              </div>
             <div style={{width:"85%"}}>
             <div>
          <select style={{float:"right",marginTop:"20px",border:"1px solid black"}} onChange={handleSort}   name="sort by: Featured" id="">
            <option value="featured">Sort by: Featured</option>
            <option value="ltoh">Price:Low to High</option>
            <option value="htol">Price:High to Low</option>
            <option value="review">Avg.Customer Review</option>
            <option value="new">Newest Arrivals</option>
          </select>
          </div>
          <div style={{marginTop:"60px"}}>
          <h1 style={{fontWeight:"bold",fontSize:"20px"}}>RESULTS</h1>
          <p style={{color:"grey"}}>Price and other details may vary based on product size and colour.</p>
          </div>
          <div className={styles.grid} >
           {payOnDelivery|| raymond ||levi||puma||nike||reebok||amazon|| us? item.map((el)=><Pages key={el.id} {...el}/>) : data.map((el)=><Pages key={el.id} {...el}/>)}             
          </div>
              <Pagination page={page} onPageChange={setPage}/>
             </div>
        </div>
    </div>
  )
  }

  Products.getInitialProps = async ({ query }) => {
    let page = 1;
  return { category: query.category, page };
  };

export default Products

