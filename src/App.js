import "./App.css";
import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import MasterLayout from "./components/Layout/MasterLayout";
import PORTFOLIO from "./components/PORTFOLIO/PORTFOLIO";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Movies from "./components/Movies/Movies";

let rooter = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "portifolo", element: <PORTFOLIO /> },
      { path: "about", element: <About /> },
      { path: "movies", element: <Movies /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export class App extends Component {
  state = {};

  render() {
    return <RouterProvider router={rooter} />;
  }
}

export default App;
