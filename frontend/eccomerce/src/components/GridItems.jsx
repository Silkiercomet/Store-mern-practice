import React from 'react'
import ItemCard from './ItemCard'

const GridItems = ({productList}) => {
  return (
    <ul className='grid'>
        {productList.map(item => <ItemCard key={item._id} {...item} id={item._id} />)}
    </ul>
  )
}

export default GridItems