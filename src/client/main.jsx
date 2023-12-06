import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";
import Senators  from "./features/senators/Senators.jsx";
import AuthForm from "./features/auth/AuthForm.jsx";
import Tasks from "./features/tasks/Tasks.jsx";
import Root from "./layout/Root.jsx";
import SingleSenatorPage from "./features/senators/SingleSenatorPage.jsx"


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SenatorInfo from "./features/senators/Senatorinfo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Senators /> },
      { path: "/senators", element: <Senators /> },
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
