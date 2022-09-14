import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GuestBookFormFn } from "../components/guest-book/GuestBookFormFn";
import { GuestBookListCtxFn } from "../components/guest-context/GuestBookListCtxFn";
import { GuestFormContext } from "../components/guest-context/GuestFormContext";
import { GuestListContext } from "../components/guest-context/GuestListContext";
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

  openForm(data, index, isEdit) {
    console.log("data:", data);
    this.setState({ page: "form", data: data, index: index, isEdit: isEdit });
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
            <Button onClick={() => this.openForm()}>Add Guest</Button>
            {this.state.page === "list" ? (
              <GuestBookListCtxFn
                openForm={this.openForm}
                isEdit={this.state.isEdit}
              />
            ) : (
              <GuestBookFormFn
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
