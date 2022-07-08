import { Carousel } from "antd";
import styled  from "styled-components";
import {ReactComponent as left} from "../../../assets/icons/leftarrow.svg";
import {ReactComponent as right} from "../../../assets/icons/rightarrow.svg";

const Container=styled(Carousel)`
width:100%;
height:100%;
`
const Img=styled.img`
width:100%;
height:100%;
`
const Icon=styled.div`
position:absolute ;
top:80% ;
display: flex;
width:100%;
justify-content:space-between ;
padding:0 90px;
`

Icon.left=styled(left)`
width:45px ;
height:45px ;
border-radius:50% ;
padding:14px ;
z-index:5 ;
background: #FFFFFF;
opacity: 0.3;
cursor: pointer;
& path{
    fill:black;
}
:hover{
    background: white;
    color: black;
    opacity:0.66 ;
}
`
Icon.right=styled(right)`
width:45px ;
height:45px ;
border-radius:50% ;
padding:14px ;
z-index:5 ;
background: #FFFFFF;
opacity: 0.3;
cursor: pointer;
& path{
    fill:black;
}
:hover{
    background: white;
    color: black;
    opacity:0.66 ;
}`



export{Container,Img,Icon}