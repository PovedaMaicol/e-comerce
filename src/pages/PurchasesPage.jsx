import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { get } from 'react-hook-form'
import getToken from '../utils/getToken';
import CartProduct from '../components/cartPage/CartProduct';

const PurchasesPage = () => {
  const [purchases, getPurchases] = useFetch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken());

  }, []);

  console.log(purchases);

  return (
    
    <section>
      <div>Purchases Page</div>
      {
        purchases?.map(purch => (
          <figure>
             <img src={purch.product.images[0].url} alt='product image' />
          </figure>

        ))
      }

    </section>
  )
}

export default PurchasesPage