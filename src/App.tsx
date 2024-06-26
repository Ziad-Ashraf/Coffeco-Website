import Navbar from "./assets/components/Navbar"
import Landing from "./assets/components/Landing.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import About from "./assets/components/About.js"
import Products from "./assets/components/Products.js"
import OurCustomers from "./assets/components/OurCustomers.js"
import Footer from "./assets/components/Footer.js"


function App() {
  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Products />
    <OurCustomers />
    <Footer />
    </>
  )
}

export default App
