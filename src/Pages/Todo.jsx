import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from "react-bootstrap/Button";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import CardItem from "../components/CardItem";
export default function Todo() {
  const [todo, setTodo] = useState([]);
  const totalItem = 10;
    let [page ,setPage] = useState(1);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((success) => {
      setTodo(success.data);
    }).catch((e) => { console.log(e); });
  }, []);
    const  changePageN0 =()=>{ setPage(page+1)};
    const prePage = ()=>{ setPage( page >1 ? page-1: page=1)};
  return (
    <div className='TodoList'> 
    <center>   
      <h1>welcome To TODO</h1>
      {todo.slice((page-1)*totalItem, page*totalItem).map((todo) => {
        return (
        <div key={todo.id}>
          <Card style={{ width: '18rem',  margin : '30px' , textAlign: 'center'}}>
      <Card.Body>
        <Card.Title>  Todo No :{todo.id} </Card.Title>
        <Card.Text>
        {todo.title}
        </Card.Text>
        <Button variant={todo.completed === true ? "danger": "success"} > learn more...</Button>
      </Card.Body>
    </Card>
    </div>)
      })}
 </center>
      <Button  disabled={page ===1} onClick={prePage}> Pre</Button>
      <Button  disabled={todo.length === page*totalItem} onClick={changePageN0}>Next</Button>
    </div>
  )
}
