import React from "react";
import { Switch } from "react-router-dom";
import NavBar from "./components/shared/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="container" style={{background:"white"}}>
          <Switch></Switch>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam adipisci fuga maxime illum recusandae at nisi id temporibus
            iure quisquam sit delectus quaerat, accusantium quibusdam nobis
            necessitatibus dolor ipsa.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
