import React from 'react'
import ItemCard from './ItemCard'

const GridItems = ({products}) => {
  return (
    <div className='grid'>
        {products.map(e => <ItemCard key={products.id} {...products} />)}
    </div>
  )
}

export default GridItems