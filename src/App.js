import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Navbar from "./routes/Navbar/Navbar"
import Authentication from "./routes/Authentication/Authentication"
import Shop from "./routes/shop/Shop"
import Checkout from "./routes/Checkout/Checkout"


const App = () => {
  return (
    <Routes>

      <Route path="/" element={ <Navbar /> } >
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="auth" element={<Authentication />}/>
          <Route path="checkout" element={<Checkout />} />
      </Route>
  
    </Routes>
   
  )
}

export default App
