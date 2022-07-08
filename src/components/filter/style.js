import styled from 'styled-components'
import {ReactComponent as Home} from '../../assets/icons/home.svg'
import {ReactComponent as SettingIcon} from "../../assets/icons/setting.svg"
import {ReactComponent as search} from '../../assets/icons/search.svg';


const Container=styled.div`
display: flex;
justify-content:center ;
`
const Icon=styled.div``
Icon.HomeLogo=styled(Home)``
Icon.Setting=styled(SettingIcon)``
Icon.Search=styled(search)``

const Forum=styled.div`
display: flex;
justify-content:center ;
width:1180px ;
column-gap:20px;
padding: 10px 10px;
`
const AdvancedSerach=styled.div`
max-width:920px;
display:grid ;
row-gap:20px;
padding:10px ;
`
const AdvancedSerachCategory=styled.div`
display:grid ;
row-gap:10px;
`
const SearchCategoryInput=styled.div`
display: flex;
flex-wrap:wrap ;
align-items:center ;
column-gap:15px;
row-gap:15px;
border-radius:2px ;
`
const CategoryTitle=styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`
const BtnWrapper=styled.div`
display: flex;
width:100% ;
justify-content:flex-end ;
`

export{Container,Forum,Icon,AdvancedSerach,AdvancedSerachCategory,SearchCategoryInput,CategoryTitle,BtnWrapper}