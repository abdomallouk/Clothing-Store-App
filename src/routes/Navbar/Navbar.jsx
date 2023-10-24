import './Navbar.scss'
import  { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/Cart-icon/CartIcon' 
import CartDropdown from '../../components/Cart-dropdown/CartDropdown'


import { Outlet , Link} from 'react-router-dom'
import { Fragment, useContext } from 'react'


import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUSer } from '../../utils /firebase/firebase'

const Navbar = () => {

  const { currentUser } = useContext(UserContext)
  const {isCartOpen } = useContext(CartContext)
  // console.log(currentUser)


  return (
    <Fragment>
         <div className='navigation'> 
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo' />
            </Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                  SHOP
                </Link>
                {
                  currentUser ?  (<span className='nav-link' onClick={signOutUSer}> SIGN OUT </span>) 
                                : (<Link className='nav-link' to='/auth'> SIGN IN </Link>) 
                              
                }

                <CartIcon />
            </div>
            {
              isCartOpen && <CartDropdown />
            }

        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navbar
