import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export const ListItem = ({movie, fun, btnDel}) => {
  return (
    <Row style={{width: "100%"}}>
      <Col md="3" py="3">
        <img src={movie?.Poster} width="100%" />
      </Col>
      <Col>
        <h3>{movie?.Title}</h3>
        <h4>Rating :{movie?.imdbRating}</h4>
      </Col>
      <div className="d-flex justify-content-between py-3">
      {(movie.cat) && <Button variant="danger" size="lg" onClick={()=> fun(movie.imdbID)}>
                Delete
              </Button>
      }
      {(movie.cat) && <Button variant="info">{movie.cat}</Button>}

      {(!movie.cat) && <Button variant="info" onClick={()=>fun("happy", movie)}>happy</Button>}
      {(!movie.cat) && <Button variant="secondary" onClick={()=>fun("lazy", movie)}>Lazy </Button>} </div>
    </Row>
  );
};
