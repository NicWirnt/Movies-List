import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete, handleOnSelect}) => {
 
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning" onClick={()=>handleOnSelect()}>ALL</Button>
            <Button variant="primary"  onClick={()=>handleOnSelect("happy")}>HAPPY</Button>
            <Button variant="danger"  onClick={()=>handleOnSelect("lazy")}>LAZY</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary">GRID</Button>
            <Button variant="secondary">LIST</Button>
          </ButtonGroup>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          {movieList.map((movie,i) => (
            <CustomCard movie={movie} key={i} fun={handleOnDelete}  btnDel={true} />
          ))}
        </div>
      </Col>
    </Row>
  );
};
