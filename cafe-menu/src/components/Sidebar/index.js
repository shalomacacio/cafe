import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Café</SidebarLink>
                <SidebarLink to="/">Capuccino</SidebarLink>
                <SidebarLink to="/">Macchiato</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/"> Peça Já !</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar