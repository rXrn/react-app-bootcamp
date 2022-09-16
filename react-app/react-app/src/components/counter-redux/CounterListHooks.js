import { useReducer } from "react";
import { Alert, Badge, Button, Card, Row, Col } from "react-bootstrap";
import {
  initialState,
  counterReducer,
  CounterActions,
} from "../../reducer/counter-reducer";

function mapDispatchToProps(dispatch) {
  return {
    addCounter: () => dispatch({ type: CounterActions.ADD_COUNTER }),
    deleteCounter: (counter) =>
      dispatch({ type: CounterActions.DELETE_COUNTER, payload: counter }),
    increment: (counter) =>
      dispatch({ type: CounterActions.INCREMENT, payload: counter }),
    decrement: (counter) =>
      dispatch({ type: CounterActions.DECREMENT, payload: counter }),
  };
}

export function CounterListHooks(props) {
  const [{ counters }, dispatch] = useReducer(counterReducer, initialState);
  const { addCounter, deleteCounter, increment, decrement } =
    mapDispatchToProps(dispatch);

  return (
    <Row>
      <Col>
        <Button className="my-5" onClick={() => addCounter()}>
          ADD
        </Button>
      </Col>
      <Row className="justify-content-between">
        {counters.map((counter, index) => {
          return (
            <Col key={index + 1}>
              <Card>
                <Card.Header>
                  Counter {counter.id}
                  <Button onClick={() => deleteCounter(counter.id)}>
                    DELETE
                  </Button>
                </Card.Header>
                <Card.Body>{counter.count}</Card.Body>
                <Card.Footer>
                  <Button
                    disabled={counter.count === 20 ? true : false}
                    onClick={() => increment(counter)}
                  >
                    +
                  </Button>

                  <Button
                    disabled={counter.count === -10 ? true : false}
                    onClick={() => decrement(counter)}
                  >
                    -
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
}
