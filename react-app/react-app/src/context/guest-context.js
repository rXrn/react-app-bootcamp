import { Component, createContext } from "react";
import uniqid from "uniqid";

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

export const GuestContext = createContext();

export class GuestProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [...guests],
    };

    this.saveGuest = this.saveGuest.bind(this);
    this.editGuest = this.editGuest.bind(this);
    this.deleteGuest = this.deleteGuest.bind(this);
  }

  saveGuest(guest, index) {
    const { guests } = this.props;
    if (guest?.id) {
      guests.splice(index, 1, guest);
      this.setState({ guests, index: null, page: "list" });
    } else {
      guest.id = uniqid();
      this.setState({ guests: [...this.state.guests, guests], page: "list" });
    }
  }

  deleteGuest(index) {
    const { guests } = this.state;
    guests.splice(index, 1);
    this.setState({ guests });
    console.log(guests);
  }

  editGuest(guest, index) {
    const { guests } = this.props;
    guests.splice(index, 1, guest);
    this.setState({ guests, index: null, page: "list" });
    console.log(index);
  }

  //   stateForm(guest, index) {}

  render() {
    const { guest, children } = this.props;
    const value = {
      guests: this.state.guests,
      saveGuest: this.saveGuest,
      index: this.state.index,
      isEdit: false,
      editGuest: this.editGuest,
      deleteGuest: this.deleteGuest,
    };

    return (
      <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
    );
  }
}

export function withGuestConsumer(mapToProps) {
  return (WrappedComponent) => {
    class GuestConsumer extends Component {
      render() {
        return (
          <GuestContext.Consumer>
            {(value) => {
              if (typeof mapToProps === "function") {
                value = mapToProps(value);
              }
              return <WrappedComponent {...value} {...this.props} />;
            }}
          </GuestContext.Consumer>
        );
      }
    }
    return GuestConsumer;
  };
}
