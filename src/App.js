import React from "react";
import { Route } from "react-router-dom";

// COMPONENTS AND PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
