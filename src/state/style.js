import styled from "styled-components";

const Container=styled.div`
display: flex;
align-items:center ;
justify-content:center ;
justify-content:space-between ;
height: 60px;
padding: 0 50px ;
background-color:forestgreen ;
.navlink{
    display: flex;
    align-items:center ;
    justify-content:space-between ;
    column-gap:25px; 
    @media (max-width:475px){
    display:none ;
    } 
}
   
    .btn{
        display:none ;
        padding:5px 20px ;
        border-radius:7px;
        border:none;
        border:outline;
        font-size:15px ;
        cursor: pointer;
        :active{
            transform:scale(0.95) ;
        }
        @media (max-width:475px){
            display: block;
        }
    }
        
.link{
    text-decoration:none ;
    color:white ;
    @media (max-width:475px){
            color:red ;
            font-size:20px;
        }
}
   
    
.logo{
    color:white ;
    text-decoration:none ;
}

.navlinkcolumn{
    display: flex;
    align-items:center ;
    justify-content:space-between ;
    column-gap:25px; 
      
    @media (max-width:475px){
        position:relative;
        top:140px ;
        display: flex;
        flex-direction:column ;
        row-gap:15px;
    }
}


`


export {Container}