import React from "react";
import { Container, Header,Nav, Navwrapper, } from "./style";
import {navbar} from '../../utils/navbar';
import { Link,Outlet,useNavigate } from "react-router-dom";
import Button from "./Generic/Button";

const Navbar =()=>{
   const navigat=useNavigate() 
    return(
        <Container>
            <Header>
                <Navwrapper>
                    <Link  to={"/home"} style={{
                        display:"flex" ,
                        alignItems:"center",
                        textDecoration:'none', }}>
                        <Nav.Logo/>
                        <Nav.Title>Houzing</Nav.Title>
                    </Link>
                <Nav>
                    {navbar.map(({title,path,id})=>{
                        return <Nav.Link key={id}  to={path}>{title}</Nav.Link>
                    })}
                </Nav>
                    <Button onClick={()=>navigat('/Login')} width={"120px"}>Login</Button>
                    </Navwrapper>
            </Header>
            <main><Outlet/></main>
        </Container>

    )
}
export default Navbar