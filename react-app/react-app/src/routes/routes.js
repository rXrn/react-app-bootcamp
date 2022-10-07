import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { GuestBook } from "../components/guest-book/GuestBook";
import { ShoeLockerList } from "../components/locker-redux/ShoeLockerList";
import { YearBook } from "../components/yearbook/YearBook";
import { SayHello } from "../components/greetings/SayHello";
import { GuestBookListCtxFn } from "../components/guest-context/GuestBookListCtxFn";
import { GuestBookRedux } from "../components/guest-book-redux/GuestBookRedux";
import { GuestBookContext } from "../context/GuestBookContext";
import { Provider } from "react-redux";
import { appStore } from "../reducer/store";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ShoeLockerList /> },
      {
        path: "greetings",
        element: <SayHello />,
      },
      {
        path: "greetings/:nama",
        element: <SayHello />,
      },
      {
        path: "guestbook",
        element: <GuestBookContext />,
      },
      {
        path: "guestbookredux",
        element: (
          <Provider store={appStore}>
            <GuestBookRedux />
          </Provider>
        ),
      },
      {
        path: "guestbookredux/:id",
        element: (
          <Provider store={appStore}>
            <GuestBookRedux />
          </Provider>
        ),
      },
    ],
  },
]);
