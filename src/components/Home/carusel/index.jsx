import React,{useRef} from "react";
import { Container, Img,Icon } from "./style";
import rasm1 from "../../../assets/imgs/bmw.jpg"
import rasm2 from "../../../assets/imgs/bmw-m3.jpg"
import rasm3 from "../../../assets/imgs/laptop.jpg"

const Caruseli=()=>{
   const slider=useRef()
   console.log(slider.current);
    return(
    <>
    <Icon>
        <Icon.left onClick={()=>slider.current.prev()}/>
        <Icon.right onClick={()=>slider.current.next()}/>
    </Icon>
        
        <Container autoplay ref={slider}>
            <Img src={rasm1} alt="rasm"/>
            <Img src={rasm2} alt="rasm"/>
            <Img src={rasm3} alt="rasm"/>
        </Container>
    </>
    )
}
export default Caruseli