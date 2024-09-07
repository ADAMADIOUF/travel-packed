import React from 'react'

const Stats = ({ items }) => {
  // Calculate the total number of items
  const totalItems = items.length

  // Calculate the number of packed items
  const packedItems = items.filter((item) => item.packed).length

  // Calculate the percentage of packed items
  const percentagePacked =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0

  return (
    <footer className='stats'>
      <em>
        {percentagePacked === 100
          ? 'You got everything! Ready to go!'
          : `You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentagePacked}%).`}
      </em>
    </footer>
  )
}

export default Stats
