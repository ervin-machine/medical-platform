import React, {useState, useEffect} from "react"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home"
import Axios from 'axios'
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoChat from "./components/VideoChat/VideoChat";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path={"/"} element={<App />} />
        <Route path={"/video"} element={<VideoChat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

