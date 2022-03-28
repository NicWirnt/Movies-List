import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CustomCard = ({movies}) => {
  return (
    <Card style={{ width: '18rem' }} className="mt-3">
     <Card.Img variant="top" src={movies?.Poster} />
    <Card.Body>
    <Card.Title>{movies?.Title}</Card.Title>
    <Card.Title>Rating :{movies?.imdbRating}</Card.Title>
    <div className="d-flex justify-content-between">
    <Button variant="info">happy</Button>
    <Button variant="secondary">Lazy</Button>
    </div>
    </Card.Body>
    </Card>
  )
}
