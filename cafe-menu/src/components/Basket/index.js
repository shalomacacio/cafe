import React, {useState} from 'react';
import {BasketContainer, BasketTitle, BasketTotal,  BasketBtnClose, BasketBtnPay,  BasketList} from './BasketElements';

const Basket = ({ items , isOpen }) => {



    const somar = () =>{
        let total = 0;
        items.map( (item)=> {
            total += item.price;
        } )

        return total;
    }

    return (
        <BasketContainer aberto={isOpen}>
            <BasketTitle> Minha Cesta </BasketTitle>
            <BasketList>
                {items.map( (item , index)=> (
                    <div key={index}> {item.name} - R$ {item.price} ,00 </div>
                ) )}
            </BasketList>
            <BasketTotal>{ somar() } </BasketTotal>
            <BasketBtnPay> Pagar </BasketBtnPay>
           
        </BasketContainer>
    )
}

export default Basket