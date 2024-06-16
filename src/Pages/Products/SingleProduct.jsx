import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../loading";



const SingleProduct = () => {

    const {id} = useParams()

    const [oneProduct, setOneProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const oneItem = async () => {
            const bringData = await fetch(`https://dummyjson.com/products/${id}`);
            const toJson = await bringData.json();
            setOneProduct(toJson);
            setLoading(false)

            console.log(oneProduct)
        }

        oneItem()
    }, [])

  
    
  return (
    <>
      {loading ? (<Loading/>) : (
        
         <div className="c flex justify-between align-middle py-16 px-9 w-full">

            <div className="imageSection w-[50%] flex justify-center">
                <img className="m max-w-[50%] text-center align-middle" src={oneProduct.images[0]} alt="Featured Image" />
            </div>

            <div className="Contentsection w-[50%] flex flex-col justify-start align-top gap-2">
            <div className="f flex w-[40%] rounded-full border border-amber-500 p-0 overflow-hidden justify-between h-7">
                <p className="f pl-2 pr-1 bg-orange-500 text-white font-bold text-lg">Flash Sale</p>
                <div className="t text-black font-normal text-lg pr-2">
                    In Stock {oneProduct.stock}
        
                </div>
            </div>
            <h2 className="p pt-3 text-2xl text-black">{oneProduct.title}</h2>
            <p className="t text-black text-lg"> 
  <span className="t font-bold pr-1">
    Category:  
   </span>
  <Link to={`/all-categories/${oneProduct.category}`} className="t capitalize hover:underline hover:text-purple-600 transition-all">
     {oneProduct.category}
  </Link>
</p>

{oneProduct.tags.map((tag, index) => (
  <span key={index} className="t text-lg capitalize">
    <span className="f font-bold">{index === 0 ? 'Tags: ' : ''}</span>
    {tag}{index < oneProduct.tags.length - 1 ? ', ' : ''}
  </span>
))}

{oneProduct.brand ? (
  <div className="p gap-2">
  <p className="t text-lg">
    <span className="f font-bold pr-1">
      Brand: 
    </span>
    {oneProduct.brand}
  </p>
  </div>
) : (
  <p>Brand: No Brand</p>
)}
  
  <Button variant="outline" className="s align-middle text-[20px]" size="lg">
  Buy Now for <span className="l pl-1"> {oneProduct.price}</span> 

</Button>




        </div>

         </div>
      )}
    </>
  )
}

export default SingleProduct
