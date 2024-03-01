import React from 'react'
import './styles/productCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({prod}) => {

  const navigate = useNavigate();
 
    
    // console.log(prod);

  const handleView = () => {
    navigate(`/product/${prod.id}`);

  }
  

  
  return (
   
      <article className='productCard'>
        <figure onClick={handleView} className='productCard_img'>
          <img src={prod.images[0].url} alt='product image' />
          <img src={prod.images[1].url} alt='product image' />
        </figure>
        <hr />
        <div>
          <ul className='productCard_info'>
            <li><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li><span>Price</span><span>$ {prod.price}</span></li>
          </ul>
        </div>

        <div  className='productButtons'>
        <button onClick={handleView}>View more</button>
        <button ><i className='bx bx-cart'></i></button>
        </div>
        

      </article>

  )
}

export default ProductCard;