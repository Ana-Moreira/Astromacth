import styled from "styled-components"

export const HomeConteiner = styled.div`
   font-family: 'Roboto', sans-serif;
   height: 100%; 
   display: flex;
   justify-content: center;
   align-items: center;
`

export const ContentScreen = styled.div`
   background-color: white;
   box-shadow: 0 5px 15px 0 rgba(115,118,117,0.80);
   width: 25vw;
   height: 95vh;
   border: 1px solid black;
   margin-bottom: 0;
   border-radius: 6%;
   @media screen and (max-width:500px) {
      width: 95vw;
      border-radius: 4%;
   }
`

export const Header = styled.header`
   display: flex;
   justify-content: space-around;
   @media screen and (max-width:500px) {
      width: 100px;
      justify-content: space-between;
   }
`

export const TitleLogo = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
   margin-left: 27%;
   @media screen and (max-width:500px) {
      width: 145px;
      height: 58px;
      margin-left: 28vw;
      margin-right: 18%;
      padding-top: 2%;
   }
`

export const GoMathList = styled.img`
   width: 10%;
   margin-top: 3%;
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   @media screen and (max-width:500px) {
      width: 31px;
   }
`

export const AnimationContainer = styled.div`
   margin-top: 20%;
   margin-bottom: 14.1%;
`

export const ProfileConteiner = styled.main`
   box-shadow: 0 5px 15px 0 rgba(117,117,117,0.77);
   color: white;
   text-shadow: 2px 1px 1px black;
   width: 22vw;
   max-height: 64vh;
   border-radius: 10%;
   margin-left: 6%;
   margin-top: 5%;
   display: flex;
   @media screen and (max-width:500px) {
      width: 85vw;
   }
`

export const ImageProfile = styled.img`
   width: 22vw;
   height: 64vh;
   border-radius: 6%;
   @media screen and (max-width:500px){
      width: 85vw;
   }
`

export const NameProfile = styled.h1`
   position: absolute;
   font-size: ${props => `${props.fontSize}px`};
   width: 21%;
   margin-top: 21.4%;
   margin-left: 1%;
   white-space: nowrap;
   @media screen and (max-width:500px) {
      margin-top: 47vh;
      margin-left: 4%;
   }
`

export const AgeProfile = styled.span`
   font-size: 16px;
   margin-top: 21%;
   margin-left: 6%;
`

export const BioProfile = styled.p`
   position: absolute;
   width: 21%;
   height: 2%;
   margin-top: 10px;
   font-size: 15px;
   line-height: 24px;
   margin-left: 1%;
   margin-top: 24%;
   border-radius: 50px;
   @media screen and (max-width:500px) {
      font-size: 16px;
      margin-top: 52vh;
      width: 80vw;
      margin-left: 4%;
   }
`

export const Footer = styled.footer`
   display: flex;
   justify-content: center;
`

export const NoMatch = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   width: 14%;
   margin-top: 9%;
   margin-right: 25%;
   border-radius: 50px;
   @media screen and (max-width:500px) {
      width: 14%;
      margin-top: 10%;
   }
`

export const Match = styled.img`
   cursor: pointer;
   &:hover {
     transform: scale(1.3);
    
   }
   width: 14%;
   margin-top: 9%;
   border-radius: 50px;
   @media screen and (max-width:500px) {
      width: 14%;
      margin-top: 10%;
   }
`