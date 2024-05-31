

const times = (props) => {
    if(props==1){
        return `Once`
    }
    else if(props==2){
        return `Twice`
    }
    else if(props==3){
        return `Thrice`
    }
    else{
        return `5 times`
    }
} //Did this for testing if else along with props 

function Button({props}) {

    const howMuch = times(props) //Here I called the if else function and sent the props to that function so that I can capture it again with if else 
    
  return (
    <div>
      <button type="button" className=" bg-yellow-300 hover:bg-orange-500 px-3 py-2 rounded-lg text-black hover:text-white transition-all font-serif font-semibold text-[16px]">Contact Us {howMuch}</button>
    </div>
  )
}



export default Button
