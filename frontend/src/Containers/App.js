import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Components/Header";
import Body from "./Body";
import Home from "./Home";
import Login from "./Accounts/Login";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Body />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
