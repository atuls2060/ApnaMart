
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
  const [jeans, setjeans] = useState(false)
  const [tshirt, settshirt] = useState(false)
  const [shirt, setshirt] = useState(false)
  const [jacket, setjacket] = useState(false)
  const [sweatshirt, setsweatshirt] = useState(false)
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
    // setPage(1);
    setjeans(false)
    settshirt(false)
    setshirt(false)
    setjacket(false)
    setsweatshirt(false)
    setPayOnDelivery(false)
    setRaymond(false)
    setlevi(false)
    setnike(false)
    setpuma(false)
    setreebok(false)
    setamazon(false)
    setus(false)
  },[category,page])
  useEffect(()=>{
   setPage(1)
  },[category])

  useEffect(()=>{
    dispatch(getProducts(category,page,limit))
  },[category,page,limit])

const handleJeans=()=>{
  setjeans(!jeans)
  let payData= data.filter((items)=>items.desc.includes("Jeans"))
  setItem(payData)
}
const handleTshirt=()=>{
  settshirt(!tshirt)
  let payData= data.filter((items)=>items.desc.includes("Polo"))
  setItem(payData)
}
const handleShirt=()=>{
  setshirt(!shirt)
  let payData= data.filter((items)=>items.desc.includes("Shirt"))
  setItem(payData)
}
const handleJacket=()=>{
  setjacket(!jacket)
  let payData= data.filter((items)=>items.desc.includes("Jacket"))
  setItem(payData)
}

const handleSweatshirt=()=>{
  setsweatshirt(!sweatshirt)
  let payData= data.filter((items)=>items.desc.includes("Sweatshirt"))
  setItem(payData)
}





  const handleDelivery = ()=>{
    setPayOnDelivery(!payOnDelivery)
      let payData= data.filter((items)=>items.base)
      setItem([...item,...payData])
  }
  const handleAmazon=()=>{
    setamazon(!amazon)
   let payData= data.filter((items)=>items.title.includes("Amazon Brand"))
   setItem(payData)
  }
  const handleReebok=()=>{
    setreebok(!reebok)
   let payData= data.filter((items)=>items.title==="Reebok")
   setItem([...item,...payData])
  }
  const handlePuma=()=>{
    setpuma(!puma)
      let payData= data.filter((items)=>items.title==="Puma")
      setItem([...item,...payData])
   
  }
  const handleRaymond=()=>{
    setRaymond(!raymond)
     let payData= data.filter((items)=> items.title==="Raymond")
      setItem([...item,...payData])
  }
  const handleLevi=()=>{
     setlevi(!levi)
     setRaymond(!raymond)
     let payData= data.filter((items)=> items.title==="Levi's")
      setItem([...item,...payData])
  }
  const handleUs=()=>{
    setus(!us)
   let payData= data.filter((items)=>items.title==="U.S. POLO ASSN.")
   setItem([...item,...payData])
  }
  
  
const handleSort =(e)=>{
  let filter;
  if(e.target.value==="ltoh"){
     setus(!us)
    filter = data.sort((a,b)=>a.price-b.price)
    console.log(filter)
    setItem(filter)
  }else if(e.target.value==="htol"){
     setus(!us)
   filter= data.sort((a,b)=>b.price-a.price)
    setItem(filter)
  }
}
 

  if(loading){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto",textAlign:"center",marginTop:"100px"}}>Loading...</h1>
  }
  if(error){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto",textAlign:"center",marginTop:"100px"}}>Error...</h1>
  }
  return (
    <div>
      <ImgSlider/>
      
        <div style={{display:"flex"}}>
             <div style={{width:"20%"}}>
              <Filter onclick1={handleJeans} onclick2={handleTshirt} onclick3={handleShirt} onclick4={handleJacket}  onclick6={handleSweatshirt} onChange1={handleDelivery}  onChange2={handleRaymond} onChange3={handleLevi} onChange4={handlePuma}  onChange6={handleReebok} onChange7={handleAmazon} onChange8={handleUs}/>
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
           {jeans|| tshirt|| shirt|| jacket|| sweatshirt ||payOnDelivery|| raymond ||levi||puma||nike||reebok||amazon|| us? item.map((el)=><Pages key={el.id} {...el}/>) : data.map((el)=><Pages key={el.id} {...el}/>)}             
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

