import Blog1 from "./components/blogs/Blog1/Blog1"
import Navbar1 from "./components/navbars/Navbar1/Navbar1"
import Navbar2 from "./components/Navbars/Navbar2/Navbar2"
import Navbar3 from "./components/navbars/Navbar3/Navbar3"

function App() {
  
  return (
    <>
      <div className="">
        {/* <Navbar3 /> */}
        <Navbar2 />
        {/* <Navbar1 /> */}
      </div>



      {/* Blogs */}
      <div className="text-slate-700 pt-[100px]">
        <Blog1 />
      </div>
    </>
  )
}

export default App
