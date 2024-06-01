import Loading from "./assets/bunny.gif"

function loadingGif() {
  return (
    <div className="m m-auto pt-4 w-[100%] flex justify-center">
      <img className="s self-center" src={Loading} alt="Loading Bunny w-[40%]" />
    </div>
  )
}

export default loadingGif
