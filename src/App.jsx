import Header from "./Header/header"
import Layout from "./Layout/layout"

function App() {

  const random = Math.floor(Math.random()*5) //Testing Props 

  return (
    <>

    <Header props = {random}/>
    <Layout/>
      
    </>
  ) //Props sent for testing
}

export default App
