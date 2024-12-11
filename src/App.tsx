import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Provider } from "react-redux";
import store from "./Kanbas/store";

function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <h1>Welcome to Web Dev!!</h1>
      <Labs /> */}
      <Kanbas />
    </div>
    </Provider>
  );
}

export default App;
