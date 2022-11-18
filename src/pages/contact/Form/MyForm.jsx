import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';





export default function MyForm(Props) {
  const [mydata, setmydata] = useState({});
  const [err, setErr] = useState({Name:"",Email:"",Task:""});

  useEffect(()=>{
  })
  const handleChange = (e) => {
    if (e.target.value==="") {
      setErr({...err,[e.target.id]:`${e.target.id} is required`})
    } else if(e.target.value.length<5) {
      setErr({...err,[e.target.id]:`${e.target.id} must be more than 5 letters`})
    }else if(e.target.id ==="Task") {
      if (!e.target.value.includes(" ")) {
        console.log(err);
        setErr({...err,"Task":`${e.target.id} must be at least two words`})
      }else{
        setmydata({...mydata,[e.target.id]:e.target.value})
        setErr({...err,"Task":""})
      }
    }
    else{
      setmydata({...mydata,[e.target.id]:e.target.value})
      setErr({[e.target.id]:""})
    }
    }
    const[finalData,setFinalData]= useState([])
    let display=async(e)=>{
      e.preventDefault()
      if (mydata.body) {
       setFinalData([...finalData,mydata])
       
      }else{
        return
      }
   };
  return (
    <>
    <Form className='text-white m-5 px-5 ' action='http://localhost:3000/home' target='_self' onSubmit={display}>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={handleChange} id="name" type="text" placeholder="Enter Name" />
    </Form.Group>
   {
    err.Name&& <Form.Text className='text-danger'>{err.Name}</Form.Text>
   } 
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={handleChange} id="email"  type="email" placeholder="Enter email" />
    </Form.Group>
    {
    err.Email&& <Form.Text className='text-danger'>{err.Email}</Form.Text>
   } 

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} id="body" type="Password" placeholder="Password" />
    </Form.Group>
    {
    err.Task&& <Form.Text className='text-danger'>{err.Task}</Form.Text>
   } 
   <br />
    <Button  type="submit" variant="warning" >
      Log in 
    </Button>
    </Form>

    

  

    </>
    

  )
}
