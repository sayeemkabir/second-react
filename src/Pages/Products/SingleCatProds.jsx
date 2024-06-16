import { Link } from "react-router-dom"

const SingleCatProds = ({categoryProducts, categoryName}) => {

    const items = categoryProducts

    console.log(categoryName )

    console.log(items)
  return (
    <>
        <div>
            <h2 className="p py-5 text-center font-bold text-black text-3xl capitalize">{categoryName}</h2>
        </div>
        <div className="g grid grid-cols-3 gap-4 w-full px-6 py-10">
            {items.products.map((product, index) => (
                <div className="b p-4 bg-stone-200 border border-neutral-700 rounded-md hover:border-red-400 flex flex-col gap-2 flex-wrap" key={index}>
                    <h3 className="t text-center font-semibold text-2xl text-orange-500 hover:text-purple-600 transition-all underline">{product.title}</h3>
                    <div className="image w-full m-auto flex justify-center">
                        <img className="r rounded max-w-[40%]" src= {product.images[0]} alt="Product Image" />
                    </div>
                    <div className="information gap-3">
                        <p className="b text-start text-lg"><span className="b font-bold">Brand: </span>{product.brand}</p>
                        <p className="b text-start text-lg"><span className="b font-bold">Price: </span>{product.price}</p>
                        <p className="b text-start text-lg"><span className="b font-bold">Warranty: </span>{product.warrantyInformation}</p>
                        <div className="b text-start text-lg"><span className="b font-bold">Reviews from People: </span>
                        <div className=" block gap-1">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="t text-gray-900">Rating: {review.rating}</div>
                        ))}</div>
                        </div>
                        <p className="b text-start text-lg"><span className="b font-bold">Overall Rating: </span>{product.rating}</p>
                        <div className="f m-auto pt-10 flex justify-center text-center">
                         <Link to = {`/${product.category}/${product.id}`}>  <button type="button" className=" bg-yellow-300 m-auto hover:bg-orange-500 px-3 py-2 rounded-lg text-black hover:text-white transition-all font-serif font-semibold text-[16px] self-center text-center">View Product</button></Link> 
                        </div>

                        
                    </div>

                </div>
            ))}
        </div>
    </>
  )
}

export default SingleCatProds
