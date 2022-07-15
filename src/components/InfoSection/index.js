import React from 'react'
import { Button } from '../ButtonElements'
import {
    Colum1, 
    Colum2, 
    Heading, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine,
    BtnWrap
} from './InfoElement'


const InfoSection = ({
    buttonLabel,
    lightBg,
    lightText,
    imgStart,
    id,
    topline,
    darkText,
    headline,
    description,
    img,
    alt,
    primary,
    dark,
    dark2,}) => {

    
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>

                    <Colum1>
                        <TextWrapper>
                            <TopLine variant='h1'>{topline}</TopLine>
                            <Heading variant='h1' lightText={lightText}>{headline}</Heading>
                            <Subtitle variant='p' darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? true:false}
                                    dark={dark ? true:false}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Colum1>

                    <Colum2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Colum2>

                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection