import { useContext } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { GuestContext } from "../../context/guest-context";

export function GuestBookListCtxFn(props) {
  const guestTable = (guests, deleteGuest) => {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Address</td>
              <td>Option</td>
            </tr>
          </thead>
          <tbody>
            {guests.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.phone}</td>
                  <td>{value.email}</td>
                  <td>{value.address}</td>
                  <td>
                    <Button
                      className="mx-2"
                      onClick={() => openForm(value, key, true)}
                    >
                      Edit
                    </Button>

                    <Button
                      className="btn-danger m-2"
                      onClick={() => deleteGuest(key)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  };
  const { guests, deleteGuest } = useContext(GuestContext);
  const { openForm } = props;

  return (
    <>
      <Row>
        <Col></Col>
        <Col xs="12">{guestTable(guests, deleteGuest)}</Col>
      </Row>
    </>
  );
}
