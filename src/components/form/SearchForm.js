import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { fetchMovie } from "../../helpers/axiosHelper";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ handleOnAddToList, getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    console.log(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    getMovie(search);
    setSearch("");
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Input movie title"
              onChange={handleOnChange}
              value={search}
              required
            />
          </Col>
          <Col>
            <Button variant="warning" type="submit" value="Search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
