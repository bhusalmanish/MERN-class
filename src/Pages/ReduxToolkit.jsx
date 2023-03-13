import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setZero } from '../reduxToolkit/counterSlice'

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



export default function ReduxToolkit() {
    return (
        <div>
            <h6>Redux toolkit!! </h6>
            <Counter />
        </div>)}


function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <center>   
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
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
        

            {/* <RForm/> */}
            </center>
        </div>
    )
}


// const RForm =()=>{
//     const HandelForm =(e)=>{
//         e.preventDefault();
//   const  email = e.target.elements.email.value;
//   const password = e.target.elements.password.value;
//    alert( email +"  "  + password);
//    e.target.elements.email.value = "";
//    e.target.elements.password.value ="";
//     }
//     return( <div>
// {/*       
//        <form onSubmit={HandelForm}>
//          <div>  
//         <label htmlFor='email'>  Email</label>
//         <input id="email"  type="Text"/>
//          </div>
// <div >
//     <label htmlFor='password'>Password</label>
//     <input id="password" type='password'></input>
// </div>

// <button type='submit'> submit</button>
//        </form> */}
//        <Form onsubmit={HandelForm}> 
//        {/* <Container>    */}
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label htmlFor='email'>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label htmlFor='password'>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       {/* </Container> */}
//     </Form>
//     </div>)
// }


