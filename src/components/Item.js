import React from 'react'

const Item = ({ setItems, item: { id, description, quantity, packed } }) => {
  const handleDeleted = () => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggle = () => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <li>
      <input type='checkbox' checked={packed} onChange={handleToggle} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={handleDeleted}>❌</button>
    </li>
  )
}

export default Item
