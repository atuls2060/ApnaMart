import React from 'react'
import styles from "./page.module.css"

const Pagination = () => {
  return (
    <div style={{marginTop:"40px"}}>
         <div className={styles.outer}>
   <ul className={styles.border}>
   <li><a className={styles.active} href="#">« Previous</a></li>
   <li><a href="#">1</a></li>
   <li><a href="#" >2</a></li>
   <li><a href="#">3</a></li>
   <li><a href="#">...</a></li>
   <li><a href="#">25</a></li>
   <li><a href="#">Next »</a></li>
 </ul> 
</div>
    </div>
  )
}

export default Pagination