import React, { useState } from 'react'
import Item from './Item'

const PackingList = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems = [...items]
  if (sortBy === 'description') {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description))
  } else if (sortBy === 'packed') {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  const handleClearAll = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear all items?'
    )
    if (confirmed) {
      setItems([])
    }
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  )
}

export default PackingList
