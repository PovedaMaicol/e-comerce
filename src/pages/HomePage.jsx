import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css';
import { useState } from 'react';
import SelectCategory from '../components/homePage/SelectCategory';
import FormPrice from '../components/homePage/FormPrice';
const ocultar = document.querySelector('.filtersContainer');
console.log(ocultar)

// const body = document.querySelector('body');


const HomePage = () => {

    const [formValue, setFormValue] = useState({
        from: 0,
        to: Infinity,
    });
    const [selectValue, setSelectValue] = useState(0);
    const [productName, setProductName] = useState('');
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
        dispatch(getProductsThunk(url));

    }, []);

    const textInput = useRef();
    const handleSearch = () => {
        setProductName(textInput.current.value.toLowerCase().trim());
    }
    const handleHide = () => {
        ocultar.classList.toggle('open');
        console.log(ocultar)
    }
    // console.log(productName);
    // console.log(products);

    const cbFilter = (prod) => {
        const {from, to} = formValue;
        const ByName = prod.title.toLowerCase().includes(productName);
        const ByCategory = +selectValue === 0 ? true : prod.categoryId=== +selectValue;
        const ByPrice = +prod.price > +from && +prod.price < +to;
        return ByName && ByCategory && ByPrice;

    }

    //  
    console.log(formValue);

    // const handleDark = () => {
    //     body.classList.toggle('dark');
    //     //
    // }

  return (
    <div>
       


        <div className='search_home'>
            <input type='text' placeholder='What are you looking for?' ref={textInput} onChange={handleSearch}/>
            <div><i className='bx bx-search'></i></div>
            
        </div>
        <div className='filter_home'>
        <i className='bx bx-filter-alt' onClick={handleHide}><a className='sub_filter'> Filters</a></i>
        </div>

        <div className='filtersContainer'>
            <div className='container_btn'>
            <i className='bx bx-x-circle' onClick={handleHide}></i>
            </div>
            <h3>Filters</h3>
            <hr/>
            <br/>
            <h4>Price</h4>

        
        <FormPrice 
        setFormValue={setFormValue}
        />
            <SelectCategory
        setSelectValue={setSelectValue}
        />
         </div>
      
       
        <section className='productsContainer'>
        {
            products?.filter(cbFilter).map(prod =>  (
                <ProductCard
                key={prod.id} 
                prod={prod}
                />

            ))

        }
        </section>
    </div>
  )
}

export default HomePage