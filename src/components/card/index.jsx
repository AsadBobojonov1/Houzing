import React from "react";
import { Container,Details,Img, InfoSection,Icon,Priceandlike, Price, Likeandzum } from "./style";
import Notavailable from "../../assets/imgs/not-available.png"


const Card=({info})=>{
    return(
        <Container>
           <Img src={info?.img || Notavailable} alt="house"/>
           <InfoSection>
            <h1 className="smalldescription">New Apartment Nice Wiew</h1>
            <p className="description">Quincy St, Brooklyn, NY, USA</p>
            <Details>
                <Details.item>
                    <Icon.Beds/>
                    <p className="description">{info?.count||4} Beds</p>
                </Details.item>
                <Details.item>
                    <Icon.baths/>
                    <p className="description">{info?.count||5} Baths</p>
                </Details.item>
                <Details.item>
                    <Icon.car/>
                    <p className="description">{info?.count||1} Garage</p>
                </Details.item>
                <Details.item>
                    <Icon.lineyka/>
                    <p className="description">{info?.count||1200} Sq Ft</p>
                </Details.item>
            </Details>
           </InfoSection>
           <Priceandlike>
            <Price>
            <span className="description beforeprice">$2,800/mo</span>
            <span className="smalldescription">$7,500/mo</span>
            </Price>
            <Likeandzum>
                <Icon.resize/>
                <Icon.like/>
            </Likeandzum>
           </Priceandlike>
        </Container>
    )
}
export default Card;