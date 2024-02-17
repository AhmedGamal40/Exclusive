import React from 'react'
import TitleNav from '../../Assets/Shared/TitleNav'
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <div>
      <TitleNav title={'Browse By Category'} name={'Category'}/>
      <div className="flex flex-wrap md:justify-between justify-center">
        <CategoryCard />
      </div>
    </div>
  )
}

export default Category