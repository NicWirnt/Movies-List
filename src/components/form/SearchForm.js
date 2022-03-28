import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { fetchMovie } from '../../helpers/axiosHelper';
import { CustomCard } from '../card/CustomCard'

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({});
  
  const handleOnChange = e =>{

    const {value} = e.target;
    setSearch(value);
    console.log(value)
  }
  

  const handleOnSubmit = async e =>{
    e.preventDefault();

    const movie = await fetchMovie(search);
    setMovies(movie.data);
    console.log(movie.data)
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
        {movies.Response === "True" && <CustomCard movies={movies}/>}
        {movies.Response === "False" && (
          <Alert variant="danger">
        {movies.Error}
          </Alert>)
        }
        </Col>
    </Row>
    
      </>
    

  )
}
