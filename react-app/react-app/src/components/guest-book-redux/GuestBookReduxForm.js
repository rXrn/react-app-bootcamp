import { useDispatch } from "react-redux";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import {
  addGuest,
  createGuest,
  removeGuest,
  updateGuest,
} from "../../reducer/guest-slice";
import uniqid from "uniqid";

export function GuestBookReduxForm(props) {
  //   const { openPage } = props;
  const { page, openPage, guest } = props;
  const [formData, setFormData] = useState({
    form: {
      id: guest?.id || "",
      name: guest?.name || "",
      phone: guest?.phone || "",
      email: guest?.email || "",
      address: guest.address || "",
    },
  });
  const dispatch = useDispatch();

  const resetForm = () => {
    setFormData({
      form: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
      },
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setFormData({
    //   form: {
    //     id: uniqid(),
    //   },
    // });

    if (formData.form?.id) {
      dispatch(updateGuest(formData.form));
    } else {
      const tahu = { ...formData.form };
      tahu.id = uniqid();
      dispatch(createGuest(tahu));
    }
  };

  const handleValueChange = (fieldName, field) => {
    const fields = Object.keys(formData.form);

    if (fields.includes(fieldName)) {
      const {
        target: { value },
      } = field;

      setFormData({
        form: {
          ...formData.form,
          [fieldName]: value,
        },
      });
    }
  };

  //   const { form } = formData.form;
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
                    value={formData.form.name}
                    onChange={(e) => handleValueChange("name", e)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Label>Phone: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    value={formData.form.phone}
                    onChange={(e) => handleValueChange("phone", e)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.form.email}
                    onChange={(e) => handleValueChange("email", e)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Label>Address: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    value={formData.form.address}
                    onChange={(e) => handleValueChange("address", e)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Row className="m-2  justify-content-center">
                <Button
                  className="submit-button mx-2"
                  style={{ width: 100 }}
                  value="submit"
                  type="submit"
                  onClick={() => openPage("form")}
                >
                  Submit
                </Button>
                <Button
                  className="submit-button "
                  value="reset"
                  type="reset"
                  style={{ width: 100 }}
                  onClick={() => resetForm()}
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
