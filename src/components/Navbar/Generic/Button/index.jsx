import React from "react";
import { Container } from "./style";

const Button=({
        type,width,
        height,mt,mb,mr,ml,
        onClick,children
    })=>{
return(
        <Container 
            type={type}
            width={width}
            height={height}
            mt={mt}
            ml={ml}
            mr={mr}
            mb={mb}
            onClick={onClick} >
            {children}
        </Container>
    )
}
export default Button