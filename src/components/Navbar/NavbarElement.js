import {styled , Box ,Link ,List,ListItem ,Typography} from "@mui/material"
import { Link as LinkS } from 'react-scroll'

export const Nav = styled(Box)`
    background: ${({scrollNav})=>(scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    ${props => props.theme.breakpoints.down("md")} {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled(Box)`
    display: none;

    ${props => props.theme.breakpoints.down("sm")} {
        display: block;
        transform: translate(-100%,60);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled(List)`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    ${props => props.theme.breakpoints.down("sm")} {
        display: none;
    }
`

export const NavItem = styled(ListItem)`
    height: 80px;
    padding: 0;
`

export const NavLink = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const TextLink = styled(Typography)`
`

export const NavBtn = styled(Box)`
    display: flex;
    align-items: center;

    ${props => props.theme.breakpoints.down("sm")}{
        display: none;
    }
`

export const NavBtnLink =styled(Link)`
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color:#010606;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: white;
        color: black;
    }
` 