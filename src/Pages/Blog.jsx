import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reduxToolkit/counterSlice'


import AppContext from './../context'
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
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())} >
          Decrement
        </button>
        <MainContext/>
      </div>
    </div> )}




//  createContext in react
 const MainContext = ()=>{
  return(<div>
  <br/>
<AppContext.Provider value ={{ name : "hari"}}>  
    {/* <h6> UseContext in react : main Container  </h6> */}
     <Container1/>
     <Container2/>
     <Container3/>
</AppContext.Provider> 
  </div>)
 }
 const Container1 = ()=>{
  return(<div>
    <h5>Container1 : with Container2</h5>
  </div>)}
 const Container2 = ()=>{
  const data = useContext(AppContext);
  return(<div>
    <h5>Container2:  {data.name}</h5>
  </div>)}
 const Container3 = ()=>{
 const name = useContext(AppContext);
  return(<div>
    <h5>Container3{name.name}</h5>
  </div>)}




