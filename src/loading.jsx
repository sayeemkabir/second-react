import Loading from "./assets/bunny.gif"

function loadingGif() {
  return (
    <div className="m m-auto pt-4 w-[40%] flex">
      <img className="s self-center" src={Loading} alt="Loading Bunny" />
    </div>
  )
}

export default loadingGif
