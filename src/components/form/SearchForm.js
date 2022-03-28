import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { CustomCard } from '../card/CustomCard'

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = e =>{

    const {value} = e.target;
    console.log(value)
  }
  

  const handleOnSubmit = e =>{
    e.preventDefault();
    alert("Got the search value")
  }
  
  return (
      <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
            <Col></Col>
    <Col>
      <Form.Control placeholder="Input movie title" onChange={handleOnChange}/>
    </Col>
    <Col>
      <Button variant='warning' type='submit' value="Search" >Search </Button>
    </Col>
        </Row>
    </Form>
    <Row>
        <Col className='d-flex justify-content-center'>
        <CustomCard/>
        </Col>
    </Row>
    
      </>
    

  )
}
