import React from 'react'
import { 
    SidebarContainer,
    Icon , 
    CloseIcons,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideBarRoute,
} from './SidebarElement';

const Sidebar = ({toggle,isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
            <CloseIcons/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sing Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to='home'>Sign In</SideBarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar