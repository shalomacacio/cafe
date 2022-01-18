import React from 'react'

import {BasketContainer} from './BasketElements';

const Basket = ({isOpen }) => {
    return (
        <BasketContainer isOpen={isOpen}>
            <div> Cesta </div>
        </BasketContainer>
    )
}

export default Basket


/*

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

*/