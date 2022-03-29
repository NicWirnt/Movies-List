import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { ListItem } from "../list-item/ListItem";

export const MovieList = ({ movieList, handleOnDelete, setCategory}) => {
  const [display,setDisplay] = useState("grid")

  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning" onClick={() => setCategory("")}>
              ALL
            </Button>
            <Button variant="primary" onClick={() => setCategory("happy")}>
              HAPPY
            </Button>
            <Button variant="danger" onClick={() => setCategory("lazy")}>
              LAZY
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary" onClick={()=>setDisplay("grid")}>GRID</Button>
            <Button variant="secondary" onClick={()=>setDisplay("list")}>LIST</Button>
          </ButtonGroup>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          {movieList.map((movie, i) => (
            display === "list" ?
            <ListItem
              movie={movie}
              key={i}
              fun={handleOnDelete}
              btnDel={true}
            />
            :
            <CustomCard
            movie={movie}
              key={i}
              fun={handleOnDelete}
              btnDel={true} />
          ))}
        </div>
      </Col>
    </Row>
  );
};
