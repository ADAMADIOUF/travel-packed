import React, { useState } from 'react'

const Count = () => {
 const[count,setCount]=useState(1)
 const [] = useState(5)
 const date = new Date("june 21 2027")
 date.setDate(date.getDate() + count)

  return (
    <div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>
          count:
          {count}
        </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p>
       <span>
        {count ===0?"Today is":""}
       </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  )
}

export default Count
