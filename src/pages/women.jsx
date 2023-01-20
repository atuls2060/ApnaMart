import React from 'react'
import Pages from "../components/Products/pageComponent/pages"
 import Filter from '../components/Products/pageComponent/filter'
 import Pagination from '../components/Products/pageComponent/pagination'

const women = () => {
  return (
    <div>
        <div style={{display:"flex"}}>
             <div style={{width:"20%"}}>
              <Filter/>
              </div>
             <div style={{width:"80%"}}>
              <Pages/>
              <Pagination/>
             </div>
        </div>
    </div>
  )
}

export default women