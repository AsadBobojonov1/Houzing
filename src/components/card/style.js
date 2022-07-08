import styled from "styled-components";
import {ReactComponent as Beds} from "../../assets/icons/Beds.svg"
import {ReactComponent as baths} from "../../assets/icons/baths.svg"
import {ReactComponent as car} from "../../assets/icons/car.svg"
import {ReactComponent as lineyka} from "../../assets/icons/lineyka.svg"
import {ReactComponent as like} from "../../assets/icons/like.svg"
import {ReactComponent as resize} from "../../assets/icons/resize.svg"
const Container=styled.div`
border: 1px solid #E6E9EC;
border-radius:3px ;
max-width:380px;
min-width:280px ;
`
const Img=styled.img`
width:100% ;
height:220px ;
`
const InfoSection=styled.div`
border-bottom: 1px solid #E6E9EC;
padding: 20px 20px 0 20px ;
`
const Details=styled.div`
display: flex;
justify-content:center ;
align-items:center ;
justify-content:space-between ;
`
Details.item=styled.div`
display: flex;
row-gap:7px;
flex-direction:column ;
align-items:center ;
`
const Icon=styled.div``;
Icon.Beds=styled(Beds)``;
Icon.baths=styled(baths)``;
Icon.car=styled(car)``;
Icon.lineyka=styled(lineyka)``;
Icon.like=styled(like)`
    width:40px ;
    height:40px ;
    padding:10px ;
    border-radius:50% ;
    background: #F6F8F9; 

    `;
Icon.resize=styled(resize)``;

const Priceandlike=styled.div`
display: flex;
align-items:center ;
justify-content:space-between ;
padding:8px 20px ;
`
const Price=styled.div`
display: flex;
flex-direction:column ;
.beforeprice{
    text-decoration-line:line-through;
}
`
const Likeandzum=styled.div`
display: flex;
column-gap:20px;
align-items:center ;
`


export{Container,Img,InfoSection,Details,Icon,Priceandlike,Price,Likeandzum}