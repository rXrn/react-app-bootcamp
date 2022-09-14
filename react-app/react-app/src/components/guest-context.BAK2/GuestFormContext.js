import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { GuestContext } from "../../context/guest-context";

export class GuestFormContext extends Component {
  constructor(props) {
    super(props);
    const { guest } = props;
    this.state = {
      form: {
        name: guest?.name || "",
        phone: guest?.phone || "",
        email: guest?.email || "",
        address: guest?.address || "",
      },
    };
  }
  handleValueChange(fieldName, field) {
    const fields = Object.keys(this.state.form);

    if (fields.includes(fieldName)) {
      const {
        target: { value },
      } = field;

      this.setState({
        form: {
          ...this.state.form,
          [fieldName]: value,
        },
      });
    }
  }

  handleFormSubmit(saveGuest, event) {
    event.preventDefault();
    saveGuest(this.state.form);
    this.props.openList();
  }

  render() {
    const { form } = this.state;
    const { openList } = this.props;
    const { index } = this.props;
    return (
      <>
        <Card>
          <Card.Header>
            <h4>Guest Form</h4>
          </Card.Header>
          <GuestContext.Consumer>
            {({ saveGuest }) => (
              <Card.Body>
                <Form onSubmit={(e) => this.handleFormSubmit(saveGuest, e)}>
                  <Row>
                    <Col>
                      <Form.Group className="m-2">
                        <Form.Label>Nama: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          value={form.name}
                          onChange={(e) => this.handleValueChange("name", e)}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group className="m-2">
                        <Form.Label>Phone: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Phone"
                          name="phone"
                          value={form.phone}
                          onChange={(e) => this.handleValueChange("phone", e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="m-2">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          value={form.email}
                          onChange={(e) => this.handleValueChange("email", e)}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group className="m-2">
                        <Form.Label>Address: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Address"
                          name="address"
                          value={form.address}
                          onChange={(e) => this.handleValueChange("address", e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Row className="m-2  justify-content-center w-25">
                      <Button
                        className="submit-button w-50"
                        style={{ width: 10 }}
                        value="submit"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button
                        className="submit-button w-50"
                        value="reset"
                        type="reset"
                        onClick={() => openList()}
                      >
                        Reset
                      </Button>
                    </Row>
                  </Row>
                </Form>
              </Card.Body>
            )}
          </GuestContext.Consumer>
        </Card>
      </>
    );
  }
}
