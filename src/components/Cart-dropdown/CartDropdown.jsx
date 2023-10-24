import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import './CartDropdown.scss'

import { CartContext } from '../../contexts/cart.context'
import CartItem from '../Cart-item/CartItem'

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)


  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' >
          {
            cartItems.map(item => <CartItem  key={item.id}  cartItem={item} />)
          }
        
        </div>

        <Link to='/checkout'>
            <Button >GO TO CHECKOUT</Button>      
        </Link>

    </div>
  )
}

export default CartDropdown
