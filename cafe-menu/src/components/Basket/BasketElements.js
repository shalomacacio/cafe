import styled from "styled-components";

export const BasketContainer = styled.aside`
    z-index:1000;
    position: fixed;
    width: 350px;
    height: 100%;
    background: #000;
    top:0;
    display: grid;
    right: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )   };
`;

/* 
position: fixed;
    z-indx:999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3seg ease-in-out;
    right: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )   };

    @media screen and ( max-width: 400px) {
        width: 100%

*/