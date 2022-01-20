import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from "./NavBarElements";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav> 
                <NavLink to='/'> CAFÉ XYZ </NavLink>
                    {/* <NavIcon onClick={toggle}>
                    <p>Pedidos</p>
                        <Bars />
                    </NavIcon> */}
            </Nav>
        </>
    )
}

export default Navbar
