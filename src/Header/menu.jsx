import { Link } from "react-router-dom"

function menu() {
  return (
    <>
      <div className="s ">
        <ul className="flex justify-around w-[100%]  p-[10px] gap-5">
            <Link  to="/"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Home</li></Link>
            <Link to="/about"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">About</li></Link>
            <Link to="/all-categories"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">All Categories</li></Link>
            <Link to="/contact"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Contact</li></Link>


        </ul>
      </div>
    </>
  )
}

export default menu
