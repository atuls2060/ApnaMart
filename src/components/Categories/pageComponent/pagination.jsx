import React from 'react'
import styles from "./page.module.css"
import { useSelector } from 'react-redux'
  


const Pagination = ({page,onPageChange}) => {
  const handleClick=(newPage)=>{
    if (newPage >= 1 && newPage <=5) {
      onPageChange(newPage);
    }
  }

  return (
    <div style={{marginTop:"40px"}}>
         <div className={styles.outer}>
   <ul className={styles.border}>
   <li  disabled={page === 1} onClick={()=>handleClick(page-1)}><p style={page === 1 ? {display:"none"} : {}} className={styles.active} >« Previous</p></li>
   <li   onClick={()=>handleClick(1)}><p style={page === 1 ? {backgroundColor:"grey"} : {}} >1</p></li>
   <li  onClick={()=>handleClick(2)}><p style={page === 2 ? {backgroundColor:"grey"} : {}} >2</p></li>
   <li  onClick={()=>handleClick(3)}><p style={page === 3 ? {backgroundColor:"grey"} : {}} >3</p></li>
   <li  onClick={()=>handleClick(4)}><p style={page === 4 ? {backgroundColor:"grey"} : {}} >4</p></li>
   <li  onClick={()=>handleClick(5)}><p style={page === 5  ? {backgroundColor:"grey"} : {}} >5</p></li>
   <li  onClick={()=>handleClick(page+1)}><p >Next »</p></li>
 </ul> 
</div>

    </div>

  )
}

export default Pagination


