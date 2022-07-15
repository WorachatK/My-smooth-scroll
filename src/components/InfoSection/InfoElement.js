import { Box ,styled,Typography} from '@mui/material'
import { default as Cstyled } from 'styled-components'

export const InfoContainer = styled(Box)`
    color: #fff;
    background: ${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};

    ${props => props.theme.breakpoints.down('sm')}{
        padding: 100px 0;
    }
`
export const InfoWrapper = styled(Box)`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow =styled(Box)`
    display: grid;
    grid-template-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

    ${props => props.theme.breakpoints.down('sm')}{
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}} 

`

export const Colum1 = styled(Box)`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Colum2 = styled(Box)`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled(Box)`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled(Typography)`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled(Typography)`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

    ${props => props.theme.breakpoints.down('xs')}{
        font-size: 32px;
    }
`

export const Subtitle = styled(Typography)`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText})=>(darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled(Box)`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled(Box)`
    max-width: 555px;
    height: 100%;
`

export const Img = Cstyled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`