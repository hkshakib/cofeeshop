import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="flex flex-col w-full h-full-screen font-default">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
