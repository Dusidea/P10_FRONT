import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Header from "./layouts/Header";
import App from "./App.jsx";
import Footer from "./layouts/Footer";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
