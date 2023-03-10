import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reduxToolkit/counterSlice'

export default function Blog() {
  return (
    <div className='Blog'>

<center>  <h1>  Blog</h1>
<Counter/>
 </center>

    </div>
  )
}




function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}