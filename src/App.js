import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Does from "./components/does/Does";
import Info from "./components/info/Info";

function App() {
  return (
    <>
        <Header/>
        <Does/>
        <Info/>
    </>
  );
}

export default App;
