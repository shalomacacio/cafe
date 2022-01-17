import React from 'react';
import { ProductsContainer, ProdutctHeading, ProductWraper, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements';

const Products = ({data, heading}) => {
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
                            <ProductButton>Adicionar</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWraper>
            
        </ProductsContainer>
    )
}

export default Products
