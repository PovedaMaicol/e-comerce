import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCarThunk, setCart } from '../store/slices/cart.slice';
import CartProduct from '../components/cartPage/CartProduct';
import useAuth from '../hooks/useAuth';
import getToken from '../utils/getToken';

const CartPage = () => {

  const cart =  useSelector(store => store.cart);
  const dispatch = useDispatch();
  const createBuy = useAuth();

  useEffect(() => {
    dispatch(getCarThunk());
  }, []);
  
  const handleTotals = () => {
    return cart.reduce((ac, cv) => ac + (cv.quantity * cv.product?.price), 0);
  }

  const handleBuy = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    createBuy(url, '', getToken());
    dispatch(setCart([]));
  }


  console.log(cart);

  return (
    <div>
      {
        cart?.map(prod => (
          <CartProduct
          key={prod.id}
          prod={prod}
          />
      
        ))
      }
      <div>
        <h3>Total buy: $ {handleTotals()}</h3>
        <button onClick={handleBuy}>Buy</button>
      </div>
      </div>
  )
}

export default CartPage