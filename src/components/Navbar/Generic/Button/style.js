import styled, { Styled } from "styled-components";

const GetType=(type)=>{
    switch(type){
        case 'primary':
            return{background: '#0061DF',
                color:'#ffffff',border:"none"};
        case 'secondary':
            return{border: '1px solid #E6E9EC',color:'#0D263B'};
        default:
            return{border: '1px solid #E6E9EC',background:'transparent',color:'#ffffff'};
        }
    };
                
const Container = styled.button`
display: flex;
align-items:center ;
justify-content:center ;
column-gap:8px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
border-radius: 2px;
${({type})=> GetType(type)}
width: ${({width})=>(width ? width:"auto" )};
height: ${({height})=>height || "44px"};
margin-top:${({mt})=>'${mt}px'} ;
margin-bottom:${({mb})=>'${mb}px'} ;
margin-right:${({mr})=>'${mr}px'} ;
margin-left:${({ml})=>'${ml}px'} ;
cursor: pointer;
:active{
    transform:scale(0.95) ;
    opacity: 0.7;
}
`
    

export {Container}