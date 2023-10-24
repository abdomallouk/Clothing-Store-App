import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"
import ProductCard from "../../components/product-card/product-card"

import './Shop.scss'

const Shop = () => {

  const {products} = useContext(ProductsContext)

  return (
    <div className="products-container">
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
    // <h1>lakjdadlk</h1>
  )
}

export default Shop
