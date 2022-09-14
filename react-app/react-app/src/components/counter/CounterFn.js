import { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { CounterButton } from "../counter/CounterButton";

export function CounterFn(props) {
  const [state, setState] = useState({ counters: [0, 0, 0, 0] });

  const increment = (index) => {
    const { counters } = state;
    counters[index] = counters[index] + 1;
    setState({ counters });
  };

  const decrement = (index) => {
    const { counters } = state;
    counters[index] = counters[index] - 1;
    setState({ counters });
  };

  const addCounter = () => {
    setState({ counter: [...state.counters, 0] });
  };

  const deleteCounter = (index) => {
    setState({ counter: [...state.counters, 0] });
  };

  return (
    <>
      <Row className="d-flex md-5">
        <Button onClick={addCounter}>Add</Button>
      </Row>
      <Row className="d-flex justify-content-center m-5">
        {state.counters.map((counter, index) => {
          return (
            <Col xs="3" key={index}>
              <Card className="mt-4">
                <Card.Header className="d-flex justify-content-between">
                  React Counter
                  <Button
                    onClick={() => {
                      deleteCounter(index);
                    }}
                  >
                    X
                  </Button>
                </Card.Header>
                <Card.Body className="text-center">
                  <h2
                    className={
                      counter >= 0 && counter <= 5 ? "bg-warning" : "bg-danger"
                    }
                  >
                    {counter}
                  </h2>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-evenly">
                  <CounterButton
                    label="+"
                    action={() => increment(index)}
                    isDisable={counter >= 10}
                  />
                  <CounterButton
                    label="-"
                    action={() => decrement(index)}
                    isDisable={counter <= 0}
                  />
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
