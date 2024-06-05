import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import About from "./Pages/About";
import CategoryPage from "./Pages/CategoryPage";
import Contact from "./Pages/Contact";
import Error from "./Pages/Errorpage";
import Home from "./Pages/Home";
import SingleCategory from "./Pages/SingleCategory";
import Loading from "./loading";

function App() {

  const [allProducts, setAllProducts] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const getData = async ()=>{

      const data = await fetch(`https://dummyjson.com/products?limit=12`);
      const response = await data.json();
      setAllProducts(response);
      setLoading(false);

    }
    getData()
  }, [])



  return (
    <Router>
    <Header />
    {loading ? (<Loading/>): (
      <Routes>
        <Route exact path = "/" element={<Home allProducts={allProducts}/>}/>
        <Route exact path = "/contact" element={<Contact/>}/>
        <Route exact path = "/all-categories" element = {<CategoryPage/>}/>
        <Route exact path = "/about" element = {<About/>}/>
        <Route exact path = "/all-categories/:oneCategory" element = {<SingleCategory/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    )}
    <Footer/>
    </Router>

    
    
    
  )}
  

export default App
