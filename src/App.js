import React from "react";
import Dropdown from "./Dropdown";

const App = () => {
  const items = ["Yes", "No", "May be"];

  return (
    <div className="App card">
      <h1 className="card__title">Should you use a dropdown?</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
