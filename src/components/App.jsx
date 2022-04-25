import React from "react";
import Form from "./Form";

//change this var to true to see login form
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
