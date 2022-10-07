import uniqid from "uniqid";
import { Col, Row } from "react-bootstrap";
import { Component } from "react";
import { GuestForm } from "./GuestForm";
import { GuestBookList } from "./GuestBookList";
// import Table from "react-bootstrap/Table";

const guests = [
  {
    id: uniqid(),
    name: "Adis",
    phone: "123",
    email: "adis@email.com",
    address: "Jakarta",
  },
  {
    id: uniqid(),
    name: "Juan",
    phone: "123",
    email: "juan@email.com",
    address: "Jakarta",
  },
];

export class GuestBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "list",
      guests: [...guests],
    };
    console.log(this.state.guests);
    this.openForm = this.openForm.bind(this);
    this.openList = this.openList.bind(this);
    this.saveGuest = this.saveGuest.bind(this);
  }

  openForm() {
    this.setState({ page: "form" });
  }

  openList() {
    this.setState({ page: "list" });
  }

  saveGuest(guests) {
    guests.id = uniqid();
    this.setState({ guests: [...this.state.guests, guests], page: "list" });
  }

  render() {
    let elements = (
      <Col>
        <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">
          Guests
        </h2>
      </Col>
    );

    if (this.state.page === "form") {
      return (
        <Row as="section" className="mx-5 my-3">
          {elements}
          <GuestForm
            openList={this.openList}
            saveGuest={this.saveGuest}
          ></GuestForm>
        </Row>
      );
    } else {
      return (
        <Row as="section" className="mx-5 my-3">
          {elements}
          <GuestBookList guests={guests} openForm={this.openForm} />
        </Row>
      );
    }
  }
}
