import React from 'react'
import { Heading } from '@chakra-ui/react'
import Shoppingcart from './Shoppingcart'
import History from '../BuyProducts/History'
import TopPick from '../BuyProducts/TopPicks'
import Inspired from '../BuyProducts/Inspired'
import Supplies from '../BuyProducts/Supplies'

const Cart = () => {
  return (
    <>
      <Shoppingcart/>
      <Supplies/>
      <Inspired/>
      <TopPick/>
      <History/>
    </>
  )
}

export default Cart