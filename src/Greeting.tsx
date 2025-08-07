import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function Greeting() {
    return(
    <ShoppingCartProvider>
      <Navbar/>
      <div className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </div>
    </ShoppingCartProvider>
    )
    }
  export default Greeting;
  