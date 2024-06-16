
import ProductPge from "./Products/ProductPage"

function Home({allProducts}) {
    
console.log(allProducts)

  return (
    <>
   <ProductPge allProducts={allProducts}/>
   </>
  )
}

export default Home