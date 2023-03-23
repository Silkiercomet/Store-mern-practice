import React from 'react'
import Image from 'next/image'
const ItemCard = ({name,price,rating}) => {
  return (
    <li className="card">
    <img src="https://picsum.photos/300/?random" alt="Product Image" />
    <p className='card__header'>Product Name</p>
    <p>$99.99</p>
    <p>Rating: 4.5</p>
    <p>company</p>
    </li>
  )
}

export default ItemCard

{/* <li className="card">
<Image src="https://picsum.photos/300/300/?random" alt="Product Image" />
<p className='card__header'>{name}</p>
<p>${price}</p>
<p>Rating: {rating}</p>
</li> */}