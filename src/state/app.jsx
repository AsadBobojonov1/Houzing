import React from "react";
import Navbar23 from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./index"
import About from "./index1"
import Contact from "./index2"
import Help from "./index3"

const App=()=>{
    return(
        <Routes>
            <Route element={<Navbar23/>}>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/help" element={<Help/>}/>
            </Route>

        </Routes>
    )
}
export default App