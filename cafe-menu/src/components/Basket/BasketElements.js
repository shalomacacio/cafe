import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BasketContainer = styled.aside`
  
    position: fixed;
    width: 250px;
    height: 100%;
    background: #ffc500;
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
    font-size: 12px;
    border: none;
    margin: 10px;
    height: 40px;
    background: #558a44;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

`;


export const BasketBtnPay = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    margin: 10px;
    height: 80px;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const BasketTitle = styled.h1`
    color: #000;
    position: center;
    display: flex;
    align-items: center;
    margin: 20%;
`;

export const BasketTotal = styled.div`
   background: transparent;
   font-color: #fff;
   margin: 30%;

   p {
       font-size: 30px;
   }
`;