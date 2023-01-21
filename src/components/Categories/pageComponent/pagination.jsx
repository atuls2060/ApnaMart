import React from 'react'
import styles from "./page.module.css"

const Pagination = ({page,onPageChange}) => {
  const handleClick=(newPage)=>{
    if (newPage >= 1 && newPage <= 25) {
      onPageChange(newPage);
    }
  }

  return (
//     <div style={{marginTop:"40px"}}>
//          <div className={styles.outer}>
//    <ul className={styles.border}>
//    <li onClick={()=>handleClick(page-1)}><p className={styles.active} >« Previous</p></li>
//    <li onClick={()=>handleClick(1)}><p >1</p></li>
//    <li onClick={()=>handleClick(2)}><p >2</p></li>
//    <li onClick={()=>handleClick(3)}><p >3</p></li>
//    <li><p >...</p></li>
//    <li><p >25</p></li>
//    <li onClick={()=>handleClick(page+1)}><p >Next »</p></li>
//  </ul> 
// </div>

//     </div>
<div style={{ marginTop: "40px" }}>
<div className={styles.outer}>
  <ul className={styles.border}>
    <li onClick={() => handleClick(page - 1)}>
      <p className={styles.active}>« Previous</p>
    </li>
    {[...Array(25)].map((el, index) => (
      <li key={index} onClick={() => handleClick(index + 1)}>
        <p>{index + 1}</p>
      </li>
    ))}
    <li onClick={() => handleClick(page + 1)}>
      <p>Next »</p>
    </li>
  </ul>
</div>
</div>
  )
}

export default Pagination


