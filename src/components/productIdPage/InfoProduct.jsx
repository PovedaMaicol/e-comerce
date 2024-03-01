import React, { useState } from 'react'
import { postCartThunk, updateCart, updateCartThunk } from '../../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import './styles/infoProduct.css'

const InfoProduct = ({productId}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    console.log(productId);

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);

        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);

    }

    const handleAddToCart = () => {
        const item = cart.filter(prod => prod.productId === productId.id);
        // console.log(item);
        if (item[0]) {
            dispatch(updateCartThunk(...item, quantity));
        } else {
            dispatch(postCartThunk({
                quantity: quantity,
                productId: productId.id,
            }));
        }
    }
  return (
    <div>
    <div className='info_caracteristics'>
        <div className='caracteristics_brand'>
        <h2>{productId?.brand}</h2>
        <h3>{productId?.title}</h3>
        </div>

        
            <ul className='caracteristics_price'>
                <li className='li_price'><h2>Price</h2><h3>{productId?.price}</h3></li>
                <li className='li_quantity'>
                    <h2>Quantity</h2>
                    
                    <ul className='ul_quantity'>
                        <button className='button_less' onClick={handleLess}>-</button>
                        <li className='button_quantity'><span className='span_quantity'>{quantity}</span></li>
                        <button className='button_plus' onClick={handlePlus}>+</button>
                    </ul>
                </li>
            </ul>

       
    </div>
    <br/>
    <button className='button_add' onClick={handleAddToCart}>Add to cart<i class='bx bx-cart'></i></button>
   
    <p>{productId?.description}</p>
    <div>
        
    </div>
    
    
    </div>
  )
}

export default InfoProduct;