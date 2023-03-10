import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setZero } from '../reduxToolkit/counterSlice'

export default function ReduxToolkit() {
    return (
        <div>
            <h6>Redux toolkit!! </h6>

            <Counter />
        </div>
    )
}



function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>

            <center>   
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>  <h1>{count}     </h1></span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())} >
                    Decrement
                </button>

                <div>
                    <button aria-label="Decrement value"
                        onClick={() => dispatch(setZero())}> setZero</button>
                </div>

            </div>
            </center>
        </div>
    )
}