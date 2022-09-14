import { Table, Button } from "react-bootstrap";
import { GuestContext } from "../../context/guest-context";

export function GuestListContext({ guests, openForm, isEdit, deleteGuest }) {
  const guestTable = (guests) => {
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
                    <GuestContext.Consumer>
                      {({ deleteGuest }) => (
                        <Button
                          className="btn-danger m-2"
                          onClick={() => deleteGuest(key)}
                        >
                          Delete
                        </Button>
                      )}
                    </GuestContext.Consumer>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <GuestContext.Consumer>
      {({ guests }) => {
        return guestTable(guests);
      }}
    </GuestContext.Consumer>
  );
}

export default GuestListContext;
