import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/Navbar/navbar"
import Footer from "./components/common/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
//import Safety from "./pages/Safety/Safety"
//import Services from "./pages/Services/Services"
//import Contact from "./pages/Contact/Contact"




function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/*" element={
          <>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          <Footer/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
