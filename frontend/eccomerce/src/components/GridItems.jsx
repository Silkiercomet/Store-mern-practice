import {useState} from 'react'
import ItemCard from './ItemCard'

const GridItems = ({productList, numItemsToShow = 6}) => {
  const [displayedItems, setDisplayedItems] = useState(productList.slice(0, numItemsToShow))
  const handleLoadMore = () => {

    const currentLength = displayedItems.length;
    if(currentLength >= productList.length) return
    const newLength = currentLength + numItemsToShow;
    setDisplayedItems(productList.slice(0, newLength));
  };
  return (
    <>
        <ul className='grid'>
        {displayedItems.map(item => <ItemCard key={item._id} {...item} id={item._id} />)}
        </ul>
        <button className='btn' onClick={handleLoadMore}>load more</button>
    </>
  )
}

export default GridItems