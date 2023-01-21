import React from 'react'
import styles from "./page.module.css"
import { useSelector } from 'react-redux'
  


const Pagination = ({page,onPageChange}) => {
  const {data,total} = useSelector((state)=>state.productsManager)
  console.log(data)
  const totalPages = Math.ceil(data.length / 12)
  // console.log(totalPages)
  
  const handleClick=(newPage)=>{
    if (newPage >= 1 && newPage <= 25) {
      onPageChange(newPage);
    }
  }

  return (
    <div style={{marginTop:"40px"}}>
         <div className={styles.outer}>
   <ul className={styles.border}>
   <li disabled={page === 1} onClick={()=>handleClick(page-1)}><p className={styles.active} >« Previous</p></li>

   {Array.from({ length: totalPages }, (_, i) => (
        <p key={i} onClick={() =>handleClick(i+1)} style={{ cursor: 'pointer', margin: '0 5px', fontWeight: i + 1 === page ? 'bold' : 'normal' }}>{i + 1}</p>
      ))}

   <li disabled={page === totalPages} onClick={()=>handleClick(page+1)}><p >Next »</p></li>
 </ul> 
</div>

    </div>

  )
}

export default Pagination


