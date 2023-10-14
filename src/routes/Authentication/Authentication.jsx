
import SignInForm from '../../components/sign-in-form/SignInForm'
import SignUp from '../../components/sign-up-form/SignUp'

import './Authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'> 
    
        <SignInForm />

        <SignUp />

    </div>
  )
}

export default Authentication
