import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GuestFormContext } from "../components/guest-context/GuestFormContext.js";
import { GuestListContext } from "../components/guest-context/GuestListContext.js";
import { GuestProvider } from "./guest-context";

export class GuestBookContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "list",
      index: null,
      isEdit: false,
      data: {},
    };
    this.openForm = this.openForm.bind(this);
    this.openList = this.openList.bind(this);
  }

  openForm(data, index) {
    console.log("data:", data);
    this.setState({ page: "form", data: data, index: index });
  }

  openList() {
    this.setState({ page: "list" });
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <h2>Guest Context</h2>
          </Col>
        </Row>
        <Row>
          <GuestProvider>
            <Button onClick={() => this.openForm(this.state.data)}>
              Add Guest
            </Button>
            {this.state.page === "list" ? (
              <GuestListContext
                openForm={this.openForm}
                isEdit={this.state.isEdit}
              />
            ) : (
              <GuestFormContext
                openList={this.openList}
                guest={this.state.data}
              />
            )}
            <Button>List</Button>
            <Button>Form</Button>
          </GuestProvider>
        </Row>
      </>
    );
  }
}
