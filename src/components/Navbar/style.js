import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as Navlogo } from '../../assets/icons/Navlogo.svg';
const Container=styled.div`

`
const Navwrapper=styled.div`
display: flex;
align-items:center ;
justify-content:center ;
padding:0 10px 0 10px ;
justify-content:space-between ;
max-width:1180px ;  
width: 100% ;
color:#ffffff ;
height:64px ;
font-style:normal ;
font-weight:400 ;
font-size:16px ;
line-height:24px;

`



const Header=styled.header`
width:100% ;
display:flex ;
align-items:center ;
justify-content:center ;
background-color:var(--primaryColor);
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
`
const Nav=styled.nav`
display: flex;
column-gap: 64px;
.active{
    color:#74DCFEFF ;
}

`
Nav.Logo = styled(Navlogo)`
height:36px ;
`


Nav.Link=styled(NavLink)`
text-decoration:none ;
font-weight:300 ;
color:#ffffff ;
.active{
    color:red ;
}
`
Nav.Title=styled.span`
display: inline-block;
color:#ffffff ;
font-weight:600 ;
font-size:20px ;
padding-left:10px ;

`

export {Container,Header,Nav,Navwrapper,}