import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import MapWrapper from './components/MapWrapper';

const SERVER_URL = "http://localhost:5000/";

const App: React.FC = () => {

  const [serverMsg, setServerMsg] = useState("Loading...");


  useEffect(() => {
    fetch(SERVER_URL)
      .then(response => response.text())
      .then(data => setServerMsg(data));
  }, []);

  return (
    <MapWrapper></MapWrapper>
    // <Fragment>
    //   {serverMsg}
    // </Fragment>
  );
};

export default App;
