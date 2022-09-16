import { Card, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { LOCKER_ACTIONS } from "../../reducer/shoe-locker-reducer";
import { Col, Badge, Button } from "react-bootstrap";

function ShoeLockerList(props) {
  const { setPage, lockers, putShoes, takeShoes } = props;

  return (
    <Row>
      <Col>
        <Button onClick={() => putShoes()}>PUT</Button>
      </Col>

      {lockers.map((locker, index) => {
        return (
          <Col key={index + 1}>
            <Card>
              <Card.Header>Locker {index + 1}</Card.Header>
              <Card.Body>
                <Badge bg="dark">Shoes: {locker.shoes}</Badge>
                <Button onClick={() => takeShoes(locker)} variant="dark">
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

function mapStateToProps(state) {
  return {
    lockers: [...state.lockers],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    putShoes: (shoes) =>
      dispatch({ type: LOCKER_ACTIONS.PUT_SHOES, payload: shoes }),
    takeShoes: (shoes) =>
      dispatch({ type: LOCKER_ACTIONS.TAKE_SHOES, payload: shoes }),
    addShoes: () => dispatch({ type: LOCKER_ACTIONS.ADD_SHOES }),
  };
}

//connect:fungsi HOC dari react redux, untuk menyediakan data
export default connect(mapStateToProps, mapDispatchToProps)(ShoeLockerList);
