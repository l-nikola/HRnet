import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import CreateEmployee from "./pages/CreateEmployee/";
import CurrentEmployee from "./pages/CurrentEmployee/";
import Error from "./pages/Error/";
import Header from "./components/Header";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/current-employee" element={<CurrentEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>,
);
