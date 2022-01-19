import React, {useState} from 'react';
import {BasketContainer, BasketTitle,  BasketBtnClose, BasketList} from './BasketElements';

const Basket = ({ items , isOpen }) => {


    return (
        <BasketContainer aberto={isOpen}>
            <BasketTitle> Minha Cesta </BasketTitle>
            <BasketList>
                {items.map( (item, index)=> {
                    {console.log(items)}
                    return (
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                } )}
            </BasketList>
            <BasketBtnClose>Continuar Comprando</BasketBtnClose>
        </BasketContainer>
    )
}

export default Basket