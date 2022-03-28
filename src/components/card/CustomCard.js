import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CustomCard = () => {
  return (
    <Card style={{ width: '18rem' }} className="mt-3">
     <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  )
}