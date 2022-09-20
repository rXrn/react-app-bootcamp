import { useEffect, useState } from "react";
import {
  fetchGuests,
  removeGuest,
  updateGuest,
} from "../../reducer/guest-slice";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { GuestBookReduxForm } from "./GuestBookReduxForm";

export function GuestBookRedux(props) {
  //useEffect : menambahkan fungsi tambahan (side effect) setelah komponen ini dirender/diload
  //useSelector : menentukan state yang akan digunakan di component ini
  //useDispatch : action
  const state = useSelector((storedState) => storedState.guest);
  const dispatch = useDispatch();
  const [page, setPage] = useState("list");
  const [selectedGuest, selectGuest] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  const handleDeleteGuest = (e, guest) => {
    e.preventDefault();
    dispatch(removeGuest(guest));
  };

  const handleTambahGuest = () => {
    setPage("form");
  };
  const tambahGuest = () => {
    return <Button onClick={() => handleTambahGuest()}>+ Add Guest</Button>;
  };

  const handleUpdateGuest = (e, guest) => {
    selectGuest(guest);
    setPage("form");
  };

  if (page === "form") {
    return (
      <GuestBookReduxForm
        openPage={setPage}
        page={page}
        guest={selectedGuest}
      />
    );
  }
  console.log(state.guests);
  if (state.isLoading) {
    return (
      <Row>
        <Col></Col>
        <Col>
          <Spinner size="lg" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
        <Col></Col>
      </Row>
    );
  } else if (!state.isLoading && !Array.isArray(state.guests)) {
    return <p>Guests not found</p>;
  } else {
    return (
      <>
        <div className="my-2">{tambahGuest()}</div>
        <ul>
          {state.guests.map((guest, key) => (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-id`}>
                  <strong>Guest ID: {guest.id}</strong>.
                </Tooltip>
              }
            >
              <li key={key}>
                <b>{guest.name} </b>from <b>{guest.address}</b>
                <Button
                  className="mx-2"
                  onClick={(e) => handleUpdateGuest(e, guest)}
                >
                  edit
                </Button>
                <Button
                  className="btn-danger"
                  onClick={(e) => handleDeleteGuest(e, guest)}
                >
                  delete
                </Button>
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </>
    );
  }
}
