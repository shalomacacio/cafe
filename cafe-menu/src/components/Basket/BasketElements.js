import styled from "styled-components";

export const BasketContainer = styled.aside`
    z-index:1000;
    position: fixed;
    width: 250px;
    height: 100%;
    background: #c1c1c1;
    top:0;
    display: grid;
    right: ${({ aberto }) => ( aberto ? '0' : '-100%' )   };
`;

export const BasketList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3 , 80px);
    text-align: center;

    @media screen an (max-width: 480px){
        grid-template-rows: repeat(3, 60px)
    }

`;

export const BasketBtnClose = styled.button`
    color: #000;
`;

export const BasketTitle = styled.h1`
    color: #000;
`;
