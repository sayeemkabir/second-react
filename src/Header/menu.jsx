import { NavLink } from "react-router-dom"

function menu() {
  return (
    <>
      <div className="s ">
        <ul className="flex justify-around w-[100%]  p-[10px] gap-5">
            <NavLink  to="/"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Home</li></NavLink>
            <NavLink to="/about"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">About</li></NavLink>
            <NavLink to="/all-categories"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">All Categories</li></NavLink>
            <NavLink to="/contact"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Contact</li></NavLink>


        </ul>
      </div>
    </>
  )
}

export default menu
