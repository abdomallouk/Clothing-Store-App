import { useContext, useState } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'

import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext)

  const ToogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
 

  return (
    <div className='cart-icon-container' onClick={ToogleIsCartOpen}>
        <ShoppingIcon className='shopping-cart' /> 
        <span className='item-count'>{cartItemCount}</span>
      
    </div>
  )
}

export default CartIcon
