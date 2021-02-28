import React from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Bttn from '@material-ui/core/Button';
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import logo from "./logo.png";
import Toolbar from '@material-ui/core/Toolbar';
import {Link, BrowserRouter} from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';

  export default function Header() {
    return (
      <div style={{flexGrow: 1}}>
      <AppBar position="static" style = {{backgroundColor: "#12517A"}} >
        <Toolbar>
          <div class = "Navbar" style = {{width: '100%', display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div class = "NavButtons">
              <Bttn disableElevation style = {{outline: 'none'}}>
                <BrowserRouter forceRefresh={true}>
                  <Link to="/">
                    <img src={logo} style={{ width: "160px" }} alt = "logo" noWrap/>
                  </Link>
                </BrowserRouter>
              </Bttn>
              <Bttn Button variant="contained" disableElevation style={{
                  color: "black",
                  fontSize: "18px",
                  backgroundColor: "white",
                  outline: 'none'}}>
                <BrowserRouter forceRefresh={true}>
                  <Link to="./App" style = {{color: "black", textDecoration: 'none'}}>
                    Home
                  </Link>
                </BrowserRouter>
              </Bttn>
            </div>
            <div class = "EndButtons" style = {{display: "flex"}}>
                <Login />
                <Signup />
            </div>
            <ToastsContainer store={ToastsStore} />
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }