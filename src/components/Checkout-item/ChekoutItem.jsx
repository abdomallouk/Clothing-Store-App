import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

import './CheckoutItem.scss'



const ChekoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const {addItemToCart, decreaseItemQuantity, clearItemFromCart} = useContext(CartContext)

    const addHandler = () => addItemToCart(cartItem);
    const decreaseHandler = () => decreaseItemQuantity(cartItem);
    const clearHandler = () => clearItemFromCart(cartItem);
  


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'> {name} </span>

            <span className='quantity'>
                <div className='arrow' onClick={decreaseHandler}>  &#10094; </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addHandler}>&#10095;</div>
            </span>

            <span className='price'> {price}</span>

            <div className='remove-button' onClick={clearHandler}>  &#10005; </div>

        </div>
    )
}

export default ChekoutItem
