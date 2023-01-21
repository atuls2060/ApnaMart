import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pages = ({url,title,desc,price,cutprice,save,cut,base,id,category,page,limit}) => {
  return (<>
          <Link href={`/products?category=${category}/${id}`} style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"50%",margin:"auto"}}>
            <Image style={{width:"100%",height:"200px",margin:"auto"}} src={url} width={150} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"60%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>{title}</h1>
            <h1 style={{fontSize:"17px",textAlign:"center",overflow:"hidden"}}>{desc}</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹{price}</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹{cutprice}</p>
              <p>{save}</p>
              </div>
            <p>{cut}</p>
            <p style={{fontWeight:"500"}}>{base}</p>
          </Link>     
    </>)
}

export default Pages