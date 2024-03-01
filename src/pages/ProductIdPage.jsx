import React, { useEffect } from 'react'
import InfoProduct from '../components/productIdPage/InfoProduct';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/productIdPage/SimilarItems';
import SliderImages from '../components/productIdPage/SliderImages';
import './styles/productIdPage.css';


const ProductIdPage = () => {

  const [ productId, getProductId] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url =`https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProductId(url);

  }, [param]);

  console.log(productId);


  
  return (
    <div className='container_product'>
      <div className='nav_product'>
      <h4><span>Home</span>  |  <span className='span_product'>{productId?.title}</span></h4>
      </div>
      <br/>
      <SliderImages 
      images={productId?.images}
      />
      <br/>
      <InfoProduct
      productId={productId}
      />
      <SimilarItems 
      categoryId={productId?.categoryId}
      prodId={param.id}
      />
    </div>
  )
}

export default ProductIdPage