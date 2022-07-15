import { styled,Box,Link ,Typography} from "@mui/material";

export const FooterContainer = styled(Box)`
    background-color: #101522;
`

export const FooterWrap = styled(Box)`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`

export const FooterLinksContainer = styled(Box)`
    display: flex;
    justify-content: center;

    ${props => props.theme.breakpoints.down('md')}{
        padding-top: 32px;
    }
`


export const FooterLinksWrapper = styled(Box)`
    display: flex;

    ${props => props.theme.breakpoints.down('md')}{
        flex-direction:column;
    }
`

export const FooterLinkItems =styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;

    ${props => props.theme.breakpoints.down('sm')}{
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled(Typography)`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: all 0.3 ease-out;
    }
`


