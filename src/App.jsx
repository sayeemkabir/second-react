import { useEffect, useState } from "react"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import Products from "./Products"
import Loading from "./loading"

function App() {
  const random = Math.floor(Math.random()*5) 

  const [allProducts, setAllProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async ()=>{

      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();
      setAllProducts(response);
      setLoading(false);

    }
    getData()
  }, [])



  return (
    <>
    <Header props = {random}/>
    {loading ? <Loading/>:<Products allProducts={allProducts}/>}
    <Footer/>
    </>
    
    
  )}
  

export default App
