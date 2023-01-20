import React from 'react'
import Image from 'next/image'

const Pages = () => {
  return (<>
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
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",rowGap:"15px",marginTop:"20px"}} >
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          <div style={{margin:"auto",textAlign:"center"}}>
            <div style={{width:"40%",margin:"auto"}}>
            <Image style={{width:"100%",margin:"auto"}} src="https://m.media-amazon.com/images/I/91nYBOLqr+L._AC_UL480_FMwebp_QL65_.jpg" width={170} height={150} alt="images"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,30px)",width:"70%",margin:"auto",marginTop:"10px"}}>
              <p style={{borderRadius:"50%",backgroundColor:"black",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"orange",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"teal",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"brown",width:"20px",height:"20px"}}></p>
              <p style={{borderRadius:"50%",backgroundColor:"pink",width:"20px",height:"20px"}}></p>
            </div>
            <h1 style={{fontWeight:"bold",fontSize:"19px",textAlign:"center"}}>Amazon Brand-Symbol</h1>
            <h1 style={{fontSize:"17px",textAlign:"center"}}>Women Sweatshirt</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,25px)",width:"49%",margin:"auto",marginTop:"10px"}}><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/G9KvM8Q/star.png" width={20} height={20} alt="image"/><Image src="https://i.ibb.co/ZJFJbZG/rating.png" width={20} height={20} alt="image"/></div>
            <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",alignItems:"center"}}>
              <p style={{fontSize:"28px"}}>₹635</p>
              <p  style={{fontSize:"16px",textDecoration:"line-through"}}>₹2,699</p>
              <p>Save ₹2,064(76%)</p>
              </div>
            <p>Buy 2 Get 5% Off, Buy 3 Get 10%…</p>
            <p style={{fontWeight:"500"}}>FREE Delivery by Amazon</p>
          </div>
          
          
    </div>
    </>)
}

export default Pages