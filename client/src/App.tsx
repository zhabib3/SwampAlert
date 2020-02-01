import React, { useState, useEffect, Fragment } from "react";
import InputForm from "./components/InputForm"
import "./App.css";

const SERVER_URL = "http://localhost:5000/";

const App: React.FC = () => {

  const [serverMsg, setServerMsg] = useState("Loading...");


  useEffect(() => {
    fetch(SERVER_URL)
      .then(response => response.text())
      .then(data => setServerMsg(data));
  }, []);

  return (
    <Fragment>
      <InputForm />
    </Fragment>
  );
};

export default App;
