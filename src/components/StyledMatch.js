import styled from "styled-components"


export const MatchConteiner = styled.div`
   font-family: 'Roboto', sans-serif;
   height: 100%; 
   display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width:500px) {
      margin: 0;
   }
`
export const MatchProfiles = styled.div`
   box-shadow: 0 5px 15px 0 rgba(115,118,117,0.80);
   font-family: 'Roboto', sans-serif;
   background-color: white;
   width: 25vw;
   height: 95vh;
   border: 1px solid black;
   margin-bottom: 0;
   border-radius: 2%;
   text-align: center;
   aside {
     overflow: auto;
   } 
   @media screen and (max-width:500px) {
      width: 95vw;
      border-radius: 4%;
   }
`

export const HeaderMatch = styled.header`
   display: flex;
   justify-content: space-around; 
`

export const BackButton = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   width: 60px;
   margin-top: 4%;
   border-radius:20px;
   height: 50px;
   
`

export const LogoMatch = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
   @media screen and (max-width:500px) {
      width: 145px;
      height: 58px;
   }
`

export const DeleteMatch = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   width: 40px;
   margin-top: 4%;
   margin-right: 2%;
   border-radius:50px;
   @media screen and (max-width:500px) {
      width: 31px;
   }
`

export const AnimationContainer = styled.div`
   margin-top: 25%; 
   width: 100%; 
`

export const MathListProfiles = styled.div`
   height: 76vh;
   overflow-y: scroll;
   @media screen and (max-width:500px) {
      height: 84%;
   }
`

export const InfoMatch = styled.div`
   background: linear-gradient(to right, #e783fd6e, #83d6ff62);
   display: flex;
   justify-content: flex-start;
   border-radius: 10px;
   margin: 4%;
   max-height: 92vh;
   @media screen and (max-width:500px) {
      max-height: 10vh;
   }
`
export const MatchImage = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.267);
   margin: 2% 5%;
   @media screen and (max-width:500px) {
      height: 7vh;
      width: 12vw;
   }
`

export const MatchName = styled.p`
   font-size: 16px;
   color: #5d0d75da;
   font-weight: bolder;
   @media screen and (max-width:500px) {
      margin-top: 7%;
   }
`