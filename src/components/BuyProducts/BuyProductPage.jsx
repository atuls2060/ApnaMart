import React from 'react'
import YourOrders from '../BuyProducts/YourOrders'
import Grocery from '../BuyProducts/Grocery'
import PetSupplies from '../BuyProducts/PetSupplies'
import Supplies from '../BuyProducts/Supplies'
import Bestseller from '../BuyProducts/Bestseller'
import Inspired from '../BuyProducts/Inspired'
import TopPick from '../BuyProducts/TopPicks'
import History from '../BuyProducts/History'
import { Button } from '@chakra-ui/react'

export default function BuyProductPage() {
  return (
    <div>
      <YourOrders/>
      {/* <Grocery/> */}
      <PetSupplies/>
      <Supplies/>
      <Bestseller/>
      <Inspired/>
      <TopPick/>
      <History/>
      
    </div>
  )
}
