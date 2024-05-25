import Box from "./box";

function Layout() {
    const min = 2010;
const max = 2020;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber)


  return (
    <div className="grid grid-cols-4 gap-3 pt-[30px] pb-[30px] px-5">
        <Box props = {randomNumber}/>
        <Box props = {randomNumber}/>
        <Box props = {randomNumber}/>
        <Box props = {randomNumber}/>
        <Box props = {randomNumber}/>
      
    </div>
  )
}

export default Layout
