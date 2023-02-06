import React from 'react'
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div className='btn-cart-container'>
      <Button id='btn-cart'>
        <span>10</span>
        <span className='material-symbols-outlined'>shopping_cart</span>
      </Button>
    </div>
  )
}

export default CartWidget