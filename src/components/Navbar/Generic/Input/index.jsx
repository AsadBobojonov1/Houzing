import React from "react";
import { Container, Logo, Serachinput } from "./style";

const Input=({
    width,
    height,
    children,
    mt,
    mr,
    ml,
    mb,
    placeholder,
    onChange,
    pl,
})=>{
    return(
        <Container mr={mr} mt={mt} ml={ml} mb={mb}  width={width}>
           <Logo>
            {children}
            </Logo> 
            
            <Serachinput
                placeholder={placeholder}
                onChange={onChange}
                height={height}
                pl={pl}/>

        </Container>
    )
}
export default Input;