import React from "react";
import Button from '../Navbar/Generic/Button';
import Input from "../Navbar/Generic/Input";
import { AdvancedSerach, Container, Forum, Icon,AdvancedSerachCategory, SearchCategoryInput, CategoryTitle, BtnWrapper } from "./style";
import { Popover } from "antd";

const Filter = ( )=>{
   const advancedTitle=
   <AdvancedSerach>
    
    <AdvancedSerachCategory>
    <CategoryTitle>Address</CategoryTitle>
    <SearchCategoryInput>
        <Input placeholder={"Country"} width={200}/>
        <Input placeholder={"Region"} width={200}/>
        <Input placeholder={"City"} width={200}/>
        <Input placeholder={"Zip code"} width={200}/>
    </SearchCategoryInput>
    </AdvancedSerachCategory>

    <AdvancedSerachCategory>
    <CategoryTitle>Apartment info</CategoryTitle>
    <SearchCategoryInput>
        <Input placeholder={"Rooms"} width={200} />
        <Input placeholder={"Size"} width={200}/>
        <Input placeholder={"Sort"}  width={200}/>
    </SearchCategoryInput>
    </AdvancedSerachCategory>

    <AdvancedSerachCategory>
    <CategoryTitle>Price</CategoryTitle>
    <SearchCategoryInput>
        <Input placeholder={"Min price"} width={200}/>
        <Input placeholder={"Max price"} width={200}/>
    </SearchCategoryInput>
    </AdvancedSerachCategory>


   <BtnWrapper>
        <Button type={"primary"} width={"120px"}> Submit</Button>
   </BtnWrapper>
   </AdvancedSerach>
   
    
    return(
        <Container>
            <Forum>
<Input  placeholder={"Enter an address, neighborhood, city, or ZIP code"}  ><Icon.HomeLogo/></Input>
<Popover placement="bottomRight" trigger={'click'} content={advancedTitle}>

    <Button  type={'secondary'} height={'44'} width={'150px'} ><Icon.Setting/> Advanced</Button>
</Popover>


<Button type={"primary"} width={"200px"} height={"44"}><Icon.Search/>Search</Button>
            </Forum>
        </Container>
    )
}
export default Filter;