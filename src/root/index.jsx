import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Navbar from '../components/Navbar'; 
import { navbar } from "../utils/navbar";

const Root =()=>{
    return(
        <Routes>
            <Route path={"/login"} element={<Navigate to={'/home'}/>}/>
<Route element={<Navbar/>}>
    {navbar.map(({id,path,element})=>{
        return <Route key={id} path={path} element={element}/> 
        })}
</Route>

        </Routes>
    )
}
export default Root