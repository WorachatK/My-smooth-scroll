import { Box,styled,Typography } from "@mui/material";
import {default as Cstyled }from "styled-components";

export const HeroContainer = styled(Box)`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    &:before{
        content: '';
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.8) 100%
        ),
            linear-gradient(
            180deg,rgba(0,0,0,0.4) 0%, 
            transparent 100%
        );
        z-index: 2;
    }
`

export const HeroBg = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = Cstyled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
`

export const HeroContent =styled(Box)`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 =styled(Typography)`
    color: white;
    font-size: 48px;
    text-align: center;

    ${props => props.theme.breakpoints.down("md")}{
        font-size: 40px;
    }
    ${props => props.theme.breakpoints.down("sm")}{
        font-size: 32px;
    }
`
export const HeroP =styled(Typography)`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    ${props => props.theme.breakpoints.down("md")}{
        font-size: 24px;
    }
    ${props => props.theme.breakpoints.down("sm")}{
        font-size: 18px;
    }
`
export const HeroBtnWrapper =styled(Box)`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
