import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import {  persistor } from "./app/store";
import { store } from "./app/store";
import Header from "./layouts/Header";
import App from "./App.jsx";
import Footer from "./layouts/Footer";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <Header />
        <App />

        <Footer />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
