import { Provider } from "react-redux";
import ShoeLockerList from "./ShoeLockerList";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { lockerStore } from "../../reducer/shoe-locker-reducer";
import { ShoeLockerListHooks } from "./ShoeLockerListHooks";

export function ShoeLocker(props) {
  const [page, setPage] = useState("list");
  return (
    <Row>
      <Col xs="12">
        <h2></h2>
      </Col>
      <Provider store={lockerStore}>
        {page === "form" ? <p>LockerFormComponent</p> : <ShoeLockerListHooks />}
      </Provider>
      <Button onClick={() => setPage(page === "form" ? "list" : "form")}>
        Switch
      </Button>
    </Row>
  );
}
