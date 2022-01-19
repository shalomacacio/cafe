import React, {useState, useEffect} from 'react';
import { ProductsContainer, ProdutctHeading, ProductWraper, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements';
import Basket from '../Basket';
import api from '../../services/api';

const Products = ({heading}) => {

    const [dados, setDados] = useState([]);

    useEffect( ()=>{
        api.get("/products").then( (res)=>{
            setDados(res.data);
        }).catch( (err)=>{
            console.log("Erro"+err)
        });
    },[]);

    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    const open = ()=>{
        setIsOpen(true);
    }

    const close = ()=>{
        setIsOpen(false);
    }

    const addProduct = (e)=> {
        let itemsAtual = items;
        open();
        itemsAtual.push(e);
        setItems(itemsAtual)  
        setTimeout(() => {
            close()
        }, 5000);      
    }

    return (
        <ProductsContainer>
            <Basket isOpen={isOpen} items={items}  />
            <ProdutctHeading>{heading}</ProdutctHeading>s
            <ProductWraper>
                {dados.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={require('../../assets/images/'+product.img)} alt={product.alt} />
                            <ProductInfo>
                            <ProductTitle>{product.name} </ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>R$ {product.price}</ProductPrice>
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
