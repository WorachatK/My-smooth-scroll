import { Box, styled,Link,List } from "@mui/material";
import { Link as LinkS } from 'react-scroll'
import CloseIcon from '@mui/icons-material/Close';


export const SidebarContainer = styled(Box)`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
`

export const CloseIcons = styled(CloseIcon)`
    color:white;
`

export const Icon = styled(Box)`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled(Box)`
    color: white;
`

export const SidebarMenu = styled(List)`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    ${prpos => prpos.theme.breakpoints.down('sm')}{
        grid-template-rows: repeat(6,60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
        color: #01bf71;
    }
`
export const SideBtnWrap = styled(Box)`
    display: flex;
    justify-content: center;
`
export const SideBarRoute = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background-color: white;
    }
`