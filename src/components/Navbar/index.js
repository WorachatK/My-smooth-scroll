import React, { useEffect, useState } from 'react'
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink,
    TextLink,
} from './NavbarElement'

import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] = useState(false)

    const changNav =()=>{
        if(window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changNav)
    })

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>dolla</NavLogo>

                <MobileIcon onClick={toggle}>
                    <MenuIcon sx={{fontSize:"1.8rem"}}/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to='about' 
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            <TextLink>about</TextLink>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to='discover'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            <TextLink>Discover</TextLink>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            <TextLink>Services</TextLink>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='signup'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                            <TextLink>SignUp</TextLink>
                        </NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="/">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar