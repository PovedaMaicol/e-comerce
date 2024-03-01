import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/selectCategory.css'

const SelectCategory = ({setSelectValue}) => {

    const [categories, getCategories] = useFetch();

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
        getCategories(url);
    }, []);
    // console.log(categories)

    const textSelect = useRef();

    const handleCategory = () => {
        setSelectValue(textSelect.current.value);
//
    }

  return (
    <div className='select_container'>
   
    <select className='select_home' onChange={handleCategory} ref={textSelect}>
        <option value={0}>all</option>
            {
                categories?.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))
                
            }
    </select>
    </div>
  )
}

export default SelectCategory