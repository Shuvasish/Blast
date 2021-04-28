import React from "react";

// COMPONENTS AND PAGES
import Home from "./pages/Home";
import Nav from "./components/Nav";
//STYLES
import GlobalStyles from "./components/GlobalStyles";
//ROUTES
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Nav> </Nav>
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
