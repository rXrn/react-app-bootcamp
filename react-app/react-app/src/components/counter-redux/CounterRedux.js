import { Provider } from "react-redux";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { counterStore } from "../../reducer/counter-reducer";
import { CounterListHooks } from "./CounterListHooks";

export function CounterRedux(props) {
  return (
    <Row>
      <Col xs="12">
        <h2></h2>
      </Col>
      <Provider store={counterStore}>
        <CounterListHooks />
      </Provider>
    </Row>
  );
}
