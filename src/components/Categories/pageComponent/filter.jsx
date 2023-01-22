import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Filter = ({onChange1,onChange2,onChange3,onChange4,onChange6,onChange7,onChange8,onclick1,onclick2,onclick3,onclick4,onclick6}) => {
  const {data} = useSelector((state)=>state.productsManager)
  return (
    <div style={{width:"80%",margin:"auto",marginTop:"62px"}}>
        <h1 style={{fontWeight:"bold",fontSize:"18px"}}>Category</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
        <h1 onClick={onclick1}>Jeans</h1>
        <h1 onClick={onclick2}>T-Shirt</h1>
        <h1 onClick={onclick3}>Shirt</h1>
        </div>
            <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Winter Wear</h1>
            <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
            <h1 onClick={onclick4}>Coats, Jackets & Vests</h1>
            <h1 onClick={onclick6} >Sweatshirts & Hoodies</h1>
            </div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Avg. Customer Review</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,20px)"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,20px)"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,20px)"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,20px)"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Brands</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
        <div><input onChange={e => onChange7(e.target.checked)} type="checkbox" name="" value="" id="" /> Amazon Brand - Symbol</div>
        <div><input onChange={e => onChange6(e.target.checked)} type="checkbox" name="" value="" id="" /> Reebok</div>
        <div><input onChange={e => onChange4(e.target.checked)} type="checkbox" name="" value="" id="" /> Puma</div>
        <div><input onChange={e => onChange2(e.target.checked)} type="checkbox" name="" value="" id="" /> Raymond</div>
        <div><input onChange={e => onChange3(e.target.checked)} type="checkbox" name="" value="" id="" /> Levi&apos;s</div>
        <div><input onChange={e => onChange8(e.target.checked)} type="checkbox" name="" value="" id="" /> U.S. POLO ASSN.</div>
        </div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Price</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`,fontWeight:"500"}}>
        <h1>Under ₹300</h1>
        <h1>₹300 - ₹500</h1>
        <h1>₹500 - ₹1,000</h1>
        <h1>₹1,000 - ₹1,500</h1>
        <h1>Over ₹1,500</h1>
        </div>
        <div style={{marginTop:"5px"}}>
        <input style={{width:"60px",outline:"none",border:"1px solid grey",padding:"5px",marginRight:"7px"}} type="text" placeholder='₹ Min' /><input style={{width:"60px",outline:"none",border:"1px solid grey",marginRight:"7px",padding:"5px"}} type="text" placeholder='₹ Max' /><button style={{border:"1px solid grey",padding:"5px"}}>Go</button>
        </div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Pay On Delivery</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
        <div><input type="checkbox" name="" value="" id="" onChange={e => onChange1(e.target.checked)} /> Eligible for Pay On Delivery</div>
        </div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Deals & Discounts</h1>
        <h1 style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`,fontWeight:"500"}}>Today&apos; Deals</h1>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Amazon Fashion</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
        <div><input type="checkbox" name="" value="" id="" /> Top Brands</div>
        <div><input type="checkbox" name="" value="" id="" /> Made for Amazon</div>
        <div><input type="checkbox" name="" value="" id="" /> Premium Brands</div>
        </div>
        <h1 style={{fontWeight:"bold",fontSize:"18px",marginTop:"10px"}}>Seller</h1>
        <div style={{cursor:"pointer",fontFamily:`"Times New Roman", Times, serif`}}>
        <div><input type="checkbox" name="" value="" id="" /> Cocoblu Retail</div>
        <div><input type="checkbox" name="" value="" id="" /> Rhine Retails Pvt. Ltd.</div>
        <div><input type="checkbox" name="" value="" id="" /> SHOPPERS STOP COM</div>
        <div><input type="checkbox" name="" value="" id="" /> Monte Carlo Fashions Ltd.</div>
        <div><input type="checkbox" name="" value="" id="" /> Puma Sports India</div>
        <div><input type="checkbox" name="" value="" id="" /> Cravatex Brands</div>
        <div><input type="checkbox" name="" value="" id="" /> plusS</div>
        <div><input type="checkbox" name="" value="" id="" /> Sera Brands</div>
        </div>

        
    </div>
  )
}

export default Filter