import React from 'react'
import Adventure from '../Adventure'
import Home from '../Home'
import Restaurant from '../Restaurant'
import "./CategoryContainer.css"

const CategoryContainer = () => {
  return (
    <div className='category'>
        <h1>Category Container</h1>
        <div id='cards'>
        <Home />
        <Adventure />
        <Restaurant />
        </div>
    </div>
  )
}

export default CategoryContainer