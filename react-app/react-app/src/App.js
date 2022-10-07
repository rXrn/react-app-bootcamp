import { Footer } from "./components/layout/Footer.js";
import { Header } from "./components/layout/Header.js";
import { Container, Col, Row } from "react-bootstrap";
import { CounterProvider } from "./context/counter-context";
import { CounterWithContext } from "./components/counter-context/CounterContext.js";
import { GuestBookContext } from "./context/GuestBookContext.js";
import { CounterFn } from "./components/counter/CounterFn.js";
import { GuestBookFormFn } from "./components/guest-book/GuestBookFormFn.js";
import { ShoeLocker } from "./components/shoe-locker/ShoeLocker.js.bak";
import { CounterRedux } from "./components/counter-redux/CounterRedux.js";
import { Provider } from "react-redux";
import { GuestBookRedux } from "./components/guest-book-redux/GuestBookRedux.js";
import { appStore } from "./reducer/store.js";
import { lockerStore } from "./reducer/locker-store.js";
import { GuestBookReduxForm } from "./components/guest-book-redux/GuestBookReduxForm.js";
import { ShoeLockerList } from "./components/locker-redux/ShoeLockerList.js";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <Container fluid>
      <Header></Header>
      {/* <CounterFn /> */}
      <Provider store={lockerStore}>
        <Outlet />

        {/* <GuestBookContext /> */}

        {/* <GuestBookReduxForm /> */}
      </Provider>

      <Footer className="justify-content-center"></Footer>
    </Container>
  );
}
