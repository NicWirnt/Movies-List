import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, fun, btnDel}) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={movie?.Poster} height="300px" />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Title>Rating :{movie?.imdbRating}</Card.Title>
        <div className="d-flex justify-content-between">

          {/* {(btnDel === true) ? (
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                delete
              </Button>
            </div>
          ) : (
            <Button variant="info" onClick={() => fun("happy", movie)}>
              happy
            </Button>  
            <Button variant="info" onClick={() => fun("lazy", movie)}>
              lazy
            </Button>
            )} */}

          
      {(movie.cat) && <Button variant="danger" size="lg" onClick={()=> fun(movie.imdbID)}>
                Delete
              </Button>
      }
      {(movie.cat) && <Button variant="info">{movie.cat}</Button>}

      {(!movie.cat) && <Button variant="info" onClick={()=>fun("happy", movie)}>happy</Button>}
      {(!movie.cat) && <Button variant="secondary" onClick={()=>fun("lazy", movie)}>Lazy </Button>} 
        </div>
      </Card.Body>
    </Card>
  );
};
