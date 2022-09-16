import { useReducer } from "react";
import { Alert, Badge, Button, Card, Row, Col } from "react-bootstrap";
import {
  initialState,
  lockerReducer,
  LOCKER_ACTIONS,
} from "../../reducer/shoe-locker-reducer";

function mapDispatchToProps(dispatch) {
  return {
    putShoes: (shoes) =>
      dispatch({ type: LOCKER_ACTIONS.PUT_SHOES, payload: shoes }),
    takeShoes: (index) =>
      dispatch({ type: LOCKER_ACTIONS.TAKE_SHOES, payload: index }),
    addShoes: () => dispatch({ type: LOCKER_ACTIONS.ADD_SHOES }),
    closeLocker: (shoes) =>
      dispatch({ type: LOCKER_ACTIONS.CLOSE_LOCKER, payload: shoes }),
    openLocker: (shoes) =>
      dispatch({ type: LOCKER_ACTIONS.OPEN_LOCKER, payload: shoes }),
  };
}

export function ShoeLockerListHooks(props) {
  const [{ lockers }, dispatch] = useReducer(lockerReducer, initialState);
  const { addLocker, openLocker, closeLocker, putShoes, takeShoes, addShoes } =
    mapDispatchToProps(dispatch);

  const renderAvailableLocker = (locker) => {};
  return (
    <Row>
      <Col>
        <Button onClick={() => addShoes()}>PUT</Button>
      </Col>

      {lockers.map((locker, index) => {
        return (
          <Col key={index + 1}>
            <Card>
              <Card.Header>
                Locker {index + 1}
                {locker.isClosed ? (
                  <Button onClick={() => openLocker(locker)}>
                    Open Locker
                  </Button>
                ) : (
                  <Button onClick={() => closeLocker(locker)}>
                    Close Locker
                  </Button>
                )}
              </Card.Header>
              <Card.Body>
                {locker.shoes === 0 ? (
                  <Button
                    disabled={locker.isClosed ? true : false}
                    onClick={() => putShoes(locker)}
                  >
                    Put
                  </Button>
                ) : (
                  <Badge bg="dark">Shoes: {locker.shoes}</Badge>
                )}

                <Button
                  disabled={
                    locker.shoes === 0 || locker.isClosed ? true : false
                  }
                  onClick={() => takeShoes(locker)}
                  variant="dark"
                >
                  Take
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
