import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingScreen from "../loading"
import SingleCatProds from "./SingleCatProds"

const SingleCategory = () => {

    const {oneCategory} = useParams()

    console.log(oneCategory)

    const [category, setCategory] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect( () => {
        const getSingleCat = async () => {
            const getData = await fetch(`https://dummyjson.com/products/category/${oneCategory}`);
            const toJson = await getData.json();
            setCategory(toJson);
            setLoading(false)
        }

        console.log(category)

        getSingleCat()
    }, [])

  return (
    <>
      {Loading ? (<LoadingScreen/>) : (
        <SingleCatProds categoryProducts = {category} categoryName = {oneCategory}/>
      )}
    </>
  )
}

export default SingleCategory
