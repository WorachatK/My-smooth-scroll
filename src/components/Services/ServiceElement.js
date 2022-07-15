import { Box,styled,Typography } from "@mui/material";
import { default as Cstyled} from 'styled-components'

export const ServicesContainer = styled(Box)`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    ${props => props.theme.breakpoints.down('md')}{
        height: 1100px;
    }
    ${props => props.theme.breakpoints.down('sm')}{
        height: 1300px;
    }
`

export const ServicesWrapper = styled(Box)`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    ${props => props.theme.breakpoints.down('md')}{
        grid-template-columns: 1fr 1fr;
    }
    ${props => props.theme.breakpoints.down('sm')}{
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled(Box)`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const ServicesIcon = Cstyled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled(Typography)`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 64px;

    ${props => props.theme.breakpoints.down('sm')}{
        font-size: 2rem;
    }
`

export const ServicesH2 = styled(Typography)`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const ServicesP = styled(Typography)`
    font-size: 1rem;
    text-align: center;
`