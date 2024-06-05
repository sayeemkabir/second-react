import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading";

const CategoryPage = () => {

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bringCat = async  ()=> {
      const fetchCat = await fetch("https://dummyjson.com/products/categories")
      const catData = await fetchCat.json();
      setCategories(catData)
      setLoading(false)

      
    }
    bringCat()
  },[])

  console.log(categories)

  return ( 
    <>
    {loading ? (<Loading/>) : (
      
      <div>
        <h2 className="p py-5 text-center font-bold text-black text-3xl underline">All Categories</h2>
      <div className="f grid grid-cols-4 gap-5 p-10">
        
        {categories && categories.map((item, index) => (
          
          <Link key={index} to={`/all-categories/${item.slug}`}><div className="w shadow-md p-5 bg-slate-100 rounded-md h-13 flex align-middle justify-center" >
            <h2 className="t text-center align-middle font-bold text-black text-lg">{item.name}</h2>
          </div></Link> 

        ))}

    

      

       
      </div>
      </div>
    )}
    </>
  )
}

export default CategoryPage
