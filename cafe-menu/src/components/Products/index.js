import React, {useState} from 'react';
import { ProductsContainer, ProdutctHeading, ProductWraper, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements';

const Products = ({data, heading}) => {

    const addProduct = (e)=> {
        //método para adcionar produto na lista
        alert(e.target)
    }

    return (
        <ProductsContainer>
            <ProdutctHeading>{heading}</ProdutctHeading>
            <ProductWraper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                            <ProductTitle>{product.name} </ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton onClick={ addProduct } key={product}>Adicionar</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWraper>
            
        </ProductsContainer>
    )
}

export default Products
