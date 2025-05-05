

import './App.css'
import Boka from './Boka/Boka'
import Data from './Components/Data/Data'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Kontakt from './Components/Kontakt/Kontakt'
import Navbar from './Components/Navbar/Navbar'
import Oss from './Components/Oss/Oss'
import Pris from './Components/Pris/Pris'

function App() {
  

  return (
    <>
    <Navbar/>
      <Hero/>
      <Oss/>
      <Data/>
      <Pris/>
      <Boka/>
      <Kontakt/>
      <Footer/>
    </>
  )
}

export default App
