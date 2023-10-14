import React from 'react'
import CategoryItem from '../category/CategoryItem'
import './categories.scss'


const Directory = ({categories}) => {
  return (
    <div className='categories-container'>
        { categories.map(( category ) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </div>
  )
}

export default Directory
