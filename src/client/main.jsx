import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";
import Senators from "./features/senators/Senators.jsx";
import AuthForm from "./features/auth/AuthForm.jsx";
import Resolutions from "./features/resolutions/Resolutions.jsx";
import Root from "./layout/Root.jsx";
import SingleSenatorPage from "./features/senators/SingleSenatorPage.jsx";
import Appointments from "./features/appointment/Appointments.jsx";
import MainHome from "./layout/mainpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainHome /> },
      { path: "/resolutions", element: <Resolutions /> },
      { path: "/senators", element: <Senators /> },
      { path: "/appointments/", element: <Appointments /> },
      { path: "/senators/:id", element: <SingleSenatorPage /> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
