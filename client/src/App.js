import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import { Provider } from "react-redux"; // bind react and redux
import store from "./store";

import AppNavbar from "./component/AppNavbar";
import ShoppingList from "./component/ShoppingList";
import ItemModal from "./component/ItemModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
