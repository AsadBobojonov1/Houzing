import styled from 'styled-components'

const Container=styled.div`
display: flex;
align-items:center ;
margin-top:${({mt})=>'${mt}px'} ;
margin-bottom:${({mb})=>'${mb}px'} ;
margin-right:${({mr})=>'${mr}px'} ;
margin-left:${({ml})=>'${ml}px'} ;
border: 1px solid #E6E9EC;
border-radius: 2px;
padding-right:5px ;
width: ${({width})=>(width ? width:"100%" )};

`
const Serachinput=styled.input`
width:100% ;
height: ${({height})=>height || "44px"};
padding-left:${({pl})=>pl || "11px"} ;
outline:none ;
border:none ;

`

const Logo=styled.span`
display: flex;
align-items:center ;
padding-left:16px ;
`


export{Container,Serachinput,Logo}