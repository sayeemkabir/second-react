
function menu({props}) {
  return (
    <>
      <div className="s shadow-md">
        <ul className="flex justify-around w-[50%]  p-[10px] gap-2">
            <a href={props}><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Home</li></a>
            <a href="#"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">About</li></a>
            <a href="#"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Service</li></a>
            <a href="#"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Location</li></a>
            <a href="#"><li className=" text-lg font-semibold hover:text-orange-500 transition-all hover:shadow-sm">Contact</li></a>


        </ul>
      </div>
    </>
  )
}

export default menu
