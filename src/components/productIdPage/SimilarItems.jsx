import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import ProductCard from '../homePage/ProductCard';


const SimilarItems = ({categoryId, prodId}) => {

    const [ productsByCategory, setProductsByCategory ] = useFetch();


    useEffect(() => {
        if (categoryId) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
            setProductsByCategory(url);

        }
       
    }, [categoryId]);

    console.log(productsByCategory);
    const cbFilter = (prod) => {

        return prod.id !== +prodId;

    }
    
  
    console.log(categoryId)
  return (
    <section>
    <h2>SimilarItems</h2>
        <div className='productsContainer'>
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <ProductCard 
                    key={prod.id}
                    prod={prod}
                    />

                ))
            }

        </div>
    </section>
  )
}

export default SimilarItems