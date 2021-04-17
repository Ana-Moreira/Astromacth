
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MatchConteiner, MatchProfiles, HeaderMatch, BackButton, 
   LogoMatch, DeleteMatch, AnimationContainer, MathListProfiles, 
   InfoMatch, MatchImage, MatchName } from "./StyledMatch"
import BackHome from './imagens/back-button.png'
import Logo from './imagens/logo.png'
import DeleteButton from './imagens/delete-user.png'
import Lottie from 'react-lottie';




function MatchScreen(props) {
  const [MatchList, setMatchList] = useState([])
  const [animationState, setAnimationState] = useState({
     isStopped: false, isPaused: false
  })

  useEffect(() => {
    getMatch()
  }, [])

  const getMatch = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ana/matches')
    .then(response => {
      setMatchList(response.data.matches)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const clearMatchList = () => {
    if(window.confirm('Você tem certeza que deseja deletar todos?')) {
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ana/clear')
      .then(() => {
        alert('Matches deletados!')
        getMatch()
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (        
    <MatchConteiner>
      <MatchProfiles>
        <HeaderMatch>
          <BackButton src={BackHome} onClick={props.changeScreen}/>
          <LogoMatch src={Logo}/>
          <DeleteMatch  src={DeleteButton} onClick={clearMatchList}/>
        </HeaderMatch>
        <hr/>
      
        {MatchList.length === 0 ? (
          <AnimationContainer>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </AnimationContainer>
        ) : (
        
        <MathListProfiles>
          {MatchList.map((profile => {
            return (
              <InfoMatch key={profile.id} >
                <MatchImage src={profile.photo}/>
                <MatchName>
                  {profile.name}
                </MatchName>
              </InfoMatch>
            )
          }))}
        </MathListProfiles>
        )}
      </MatchProfiles>  
    </MatchConteiner>
  )
}
export default MatchScreen