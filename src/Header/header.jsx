import Button from "../button"
import Logo from "./logo"
import Menu from "./menu"

function header({props}) {
    const link = "#" //Just testing props
  return (
    <div className="w w-[100%] flex justify-between align-middle items-center px-2 bg-[#f7f4f4] border-b-[1px] border-orange-500 ">
      <Logo/>
      <Menu props ={link}/>
      <Button props={props} />
    </div>
  )
}

export default header
