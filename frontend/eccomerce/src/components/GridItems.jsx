import React from 'react'
import ItemCard from './ItemCard'

const GridItems = ({products}) => {
  return (
    <ul className='grid'>
        {products.map(e => <ItemCard key={products.id} {...products} />)}
    </ul>
  )
}

export default GridItems