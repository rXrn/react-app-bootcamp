import { Footer } from "./components/layout/Footer.js";
import { Header } from "./components/layout/Header.js";
import { Container, Col, Row } from "react-bootstrap";
import { CounterProvider } from "./context/counter-context";
import { CounterWithContext } from "./components/counter-context/CounterContext.js";
import { GuestBookContext } from "./context/GuestBookContext.js";
import { CounterFn } from "./components/counter/CounterFn.js";
import { GuestBookFormFn } from "./components/guest-book/GuestBookFormFn.js";
import { ShoeLocker } from "./components/shoe-locker/ShoeLocker.js";
import { CounterRedux } from "./components/counter-redux/CounterRedux.js";

export function App() {
  return (
    <Container fluid>
      <Header></Header>
      {/* <CounterFn /> */}
      <CounterRedux />
      <Footer className="justify-content-center"></Footer>
    </Container>
  );
}
