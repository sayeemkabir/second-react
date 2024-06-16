import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading";



const searchResults = () => {

    const { term } = useParams()

    console.log(term)

    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(
      () => {
        const search = async () => {
            const get = await fetch(`https://dummyjson.com/products/search?q=${term}`)
            const response = await get.json()
            setResults(response)
            setLoading(false)
        }
        search()
      }, [term]
    )

    console.log(results)
    

  return (
    <>
        {loading ? (<Loading/>
        ) : results && results.products.length > 0 ? (<div className="w w-full px-5 py-10 grid grid-cols-3 gap-3">
               {results.products.map(
                (item, index) => (
                    <div key={index} className="b border-orange-500 hover:border-red-600 transition-all rounded-lg bg-orange-300 hover:bg-red-300 p-5 flex flex-col gap-2 justify-center align-middle">
                        <div className="image">
                            <img src={item.images[0]} alt="Image" className="r rounded-md self-center"/>
                        </div>
                        <div className="information">
                            <h2 className="t text-center font-bold text-lg">{item.title}</h2>
                            <p className="t capitalize text-base text-start">Category: {item.category}</p>
                            <p className="t capitalize text-base text-start">Overall Rating: {item.rating}</p>
                            <p className="t capitalize text-base text-start">Brand: {item.brand}</p>
                            <p className="t capitalize text-base text-start">In Stock: {item.stock}</p>
                        </div>
                        <Link to = {`/${item.category}/${item.id}`}><Button variant="outline" className="w-full text-center">Buy Now for {item.price}</Button></Link>

                    </div>
                )
               )}
            </div>) : (
                <div className="p py-10">
                    <h2 className="t text-red-700 font-bold text-center text-xl">Sorry your query - "{term}" does not meet any products</h2>
                </div>
            )}

    </>
    
  )
}

export default searchResults
