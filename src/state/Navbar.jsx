import React ,{useState} from "react";
import { Container } from "./style";
import {NavLink, Outlet} from "react-router-dom" 

const Navbar23=()=>{
    const [state , setstate] = useState(false)
    
    return(
        <div>

<Container className="container">
<NavLink className={"logo"} to={"/"}> <h2>Home</h2></NavLink>

<div className={state? "navlinkcolumn" :"navlink"}>
    <NavLink className={"nav link"} to={"/about"} > About</NavLink>
    <NavLink className={"nav link"} to={"/contact"}> Contact</NavLink>
    <NavLink className={"nav link"} to={"/help"}> Help</NavLink>
</div>
<button className="btn type" onClick={()=>setstate(!state)}>
xxxxxx    </button>
</Container>
<Outlet/>
        </div>

    )
}
export default Navbar23
