

function Products({allProducts}) {
    console.log(allProducts)


  return (
   <div className="f flex justify-center align-middle flex-wrap self-center py-10 gap-5 w-[1140px] m-auto">
    {allProducts.products.map((item, index)=>(
      <div className="b min-h-[800px] border-solid border border-[#d8ba4a] hover:border-orange-900 w-[25%] p-3  bg-slate-300 flex flex-col align-middle justify-center self-center transition-all flex-wrap overflow-hidden" key={index}>
        
        <p className="p text-center text-base font-bold">{item.title}</p>

        <img className="d m-auto max-w-[200px] max-h-[200px] self-center" src={item.images[0]} alt="" />

        <h2 className="t text-center font-bold text-xl underline">Product Details:</h2>

        <div className="product details pt-4 gap-3">
          <p className="b text-base font-semibold text-start">Brand: <span className="t text-base font-normal">{item.brand}</span></p>

          <p className="b text-base font-semibold text-start">Dimensions: <span className="t text-base font-normal"><br></br> Height: {Math.floor(item.dimensions.height)} <br></br>
          Width: {Math.floor(item.dimensions.width)}</span></p>

          <p className="b text-base font-semibold text-start">Total Rating: <span className="t text-base font-normal">{item.rating}</span></p>

          <p className="b text-base font-semibold text-start">Reviews: <span className="t text-base font-normal">{item.reviews.map((feedback, index)=>(
            <span  key={index}>
             <span className="f flex flex-col gap-1  text text-start text-black-400">Star: {feedback.rating} Comment: {feedback.comment}</span>
            </span> 
          ))}</span></p>

          <p className="b text-base font-semibold text-start">Availabity Check:<span className="t text-base font-normal flex flex-col"><p>Status: {item.availabilityStatus}</p> <p>In Stock: {item.stock}</p></span></p>

          <p className="b text-base font-semibold text-start">Tags: <span className="t text-base font-normal">{item.tags.map((tag, index)=>(
            <span key={index}>
              <ul>
                <li>{tag}</li>
              </ul>
            </span>
          ))}</span></p>

<div className="w-[100%] flex justify-center align-middle self-center pt-5">
  <button type="button" className=" bg-yellow-300 m-auto hover:bg-orange-500 px-3 py-2 rounded-lg text-black hover:text-white transition-all font-serif font-semibold text-[16px] self-center text-center">Buy Now for {item.price}</button>
  </div>
        </div>

      </div>
    ))}
   </div>
  )
}

export default Products
