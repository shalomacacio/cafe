import React, {useState} from 'react';
import { ProductsContainer, ProdutctHeading, ProductWraper, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements';
import Basket from '../Basket';
const Products = ({data, heading}) => {

    const [isOpen, setIsOpen] = useState(false);

    const open = ()=>{
        setIsOpen(true);
    }

    const close = ()=>{
        setIsOpen(false);
    }

    const addProduct = (e)=> {
        //método para adcionar produto na lista
        let items = [];
        items.push(e);
        open();
        console.log(e)
    }

    return (
        <ProductsContainer>
            <Basket isOpen={isOpen} />
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
                            <ProductButton onClick={  ()=> {
                                addProduct(product);
                            }} key={product.id}>Adicionar</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWraper>
            
        </ProductsContainer>
    )
}

export default Products
