import React, { useState } from 'react'
import {
    HeroContainer ,
    HeroBg , 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    
} from './HeroElement'
import {Button} from '../ButtonElements'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Video from '../../videos/video.mp4'


const HeroSection = () => {
    const [hover,setHover] = useState(true)

    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign up for a new accoun today and receive $250 in
                credit toward your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary={true}
                    dark={true}
                >
                    Get started {
                    hover ? 
                    <ArrowForwardIosIcon
                        sx={{marginLeft:'8px',fontSize:'20px'}}
                    />
                    :<ArrowForwardIcon
                        sx={{marginLeft:'8px',fontSize:'20px'}}
                    />
                }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection