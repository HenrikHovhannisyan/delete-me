import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Does from "./components/does/Does";
import Info from "./components/info/Info";
import Customers from "./components/customers/Customers";

function App() {
  return (
    <>
        <Header/>
        <Does/>
        <Info/>
        <Customers/>
    </>
  );
}

export default App;
