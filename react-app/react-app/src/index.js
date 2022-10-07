import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
// import "..src/assets/css/styles.css";
// import contoh from "..assets/css/styles.module.css";

// const styles = {
//   color: "aqua",
//   textTransform: "uppercase",
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
// const name = "World";
// const hello = <h1 style={{ color: "red" }}>Hello World</h1>;
// const greet = <h1 style={styles}>Hello {name}</h1>;
// const greetHello = (name) => {
//   return <h1>Greeting, {name}. Welcome</h1>;
// };
root.render(
  <React.StrictMode>
    {/* {hello}
    {greet}
    {greetHello("Ari")} */}
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
