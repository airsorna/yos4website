import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,

} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="Home" onClick={toggle}> Home </SidebarLink>
                <SidebarLink to="Design" onClick={toggle}> Design </SidebarLink>
                <SidebarLink to="Theory" onClick={toggle}> Theory </SidebarLink>
                <SidebarLink to="Internet-Art" onClick={toggle}> Internet-Art </SidebarLink> 
            </SidebarMenu>
            
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar