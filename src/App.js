import React from "react";
import { popularGamesURL } from "./api";

function App() {
  return (
    <div>
      <h1>Hello Blast</h1>
      <a href={popularGamesURL()}>${popularGamesURL()}</a>
    </div>
  );
}

export default App;
