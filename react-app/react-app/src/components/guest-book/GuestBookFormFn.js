import { useState } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";

export function GuestBookFormFn(props) {
  const { guest } = props;
  const [state, setState] = useState({
    form: {
      name: guest?.name || "",
      phone: guest?.phone || "",
      email: guest?.email || "",
      address: guest?.address || "",
    },
  });

  const handleValueChange = (fieldName, field) => {
    const fields = Object.keys(state.form);

    if (fields.includes(fieldName)) {
      const {
        target: { value },
      } = field;

      setState({
        form: {
          ...state.form,
          [fieldName]: value,
        },
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { saveGuest, guest } = this.props;
    const guestFormValue = this.state.form;
    if (guest?.id) {
      guestFormValue.id = guest.id;
    }
    saveGuest(guestFormValue);
    this.props.openList();
  };

  const { form } = state;
  const { openList } = props;

  return (
    <>
      <Card>
        <Card.Header>
          <h4>Guest Form</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Nama: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={form.nama}
                    onChange={(e) => handleValueChange("name", e)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Label>Phone: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => handleValueChange("phone", e)}
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
                    onChange={(e) => handleValueChange("email", e)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Label>Address: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    value={form.address}
                    onChange={(e) => handleValueChange("address", e)}
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
      </Card>
    </>
  );
}
