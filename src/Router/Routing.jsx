import { Route, Routes, Switch } from "react-router-dom"
import About from "../Pages/About"
import CategoryPage from "../Pages/CategoryPage"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"

const Routing = () => {
  return (
    <>
    <Switch>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/all-categories" element={<CategoryPage/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </Switch>
    </>
  )
}

export default Routing
