import Link from "next/link"
const ItemCard = ({name,price,rating, company, _id}) => {
  return (
    <li className="card" id={_id}>
      <Link href={`${_id}`}>
      <img src="https://picsum.photos/300/?decoration" alt="Product Image" />
    <p className='card__header'>{name}</p>
    <p className='card__price'>${price}</p>
    <p>{company}</p>
    <p>Rating: {rating}</p>
      </Link>



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