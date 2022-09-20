import { useEffect, useState } from "react";
import * as lockerSlice from "../../reducer/locker-slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Badge,
} from "react-bootstrap";
import uniqid from "uniqid";

export function ShoeLockerList(props) {
  const state = useSelector((storedState) => storedState.locker);
  const dispatch = useDispatch();
  const { count } = props;

  useEffect(() => {
    dispatch(lockerSlice.fetchLockers());
  }, [dispatch, state.action]);

  // const handleDeleteLocker = (e, locker) => {
  //   e.preventDefault();
  //   dispatch(removeLocker(locker));
  // };
  //   console.log("Lockers: ", state.lockers);

  const closeLocker = (e, locker) => {
    e.preventDefault();
    const temp = { ...locker };
    temp.isOpen = false;
    dispatch(lockerSlice.closeLocker(temp));
  };

  const openLocker = (e, locker) => {
    e.preventDefault();
    const temp = { ...locker };
    temp.isOpen = true;
    dispatch(lockerSlice.openLocker(temp));
  };

  const putShoes = (e, locker) => {
    e.preventDefault();
    const temp = { ...locker };
    temp.shoes = temp.shoes + 1;
    dispatch(lockerSlice.putShoes(temp));
  };

  const takeShoes = (e, locker) => {
    e.preventDefault();
    const temp = { ...locker };
    temp.shoes = temp.shoes - 1;
    dispatch(lockerSlice.takeShoes(temp));
  };

  const createLocker = (e) => {
    e.preventDefault();
    const temp = {
      id: uniqid(),
      number: state.lockers.length + 1,
      shoes: 0,
      isOpen: true,
    };
    dispatch(lockerSlice.createLocker(temp));
  };

  if (state.isLoading) {
    return (
      <Row>
        <Col></Col>
        <Col>
          <Spinner size="lg" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
        <Col></Col>
      </Row>
    );
  } else if (!state.isLoading && !Array.isArray(state.lockers)) {
    return <p>Locker not found</p>;
  } else {
    return (
      <>
        <Button onClick={(e) => createLocker(e)}>Add Locker</Button>
        {state.lockers.map((locker, key) => {
          return (
            <Col key={key}>
              <Card>
                <Card.Header>
                  Locker {locker.number}
                  {locker.isOpen ? (
                    <Button onClick={(e) => closeLocker(e, locker)}>
                      Close Locker
                    </Button>
                  ) : (
                    <Button onClick={(e) => openLocker(e, locker)}>
                      Open Locker
                    </Button>
                  )}
                </Card.Header>
                <Card.Body>
                  <Row>{locker.shoes}</Row>

                  {locker.shoes === 0 ? (
                    <Button
                      disabled={locker.isOpen ? false : true}
                      onClick={(e) => putShoes(e, locker)}
                    >
                      Put
                    </Button>
                  ) : (
                    <Badge bg="dark">Shoes: {locker.shoes}</Badge>
                  )}

                  <Button
                    disabled={
                      locker.shoes === 0 || !locker.isOpen ? true : false
                    }
                    onClick={(e) => takeShoes(e, locker)}
                    variant="dark"
                  >
                    Take
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}
