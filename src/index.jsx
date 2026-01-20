import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/";
import CurrentEmployee from "./pages/CurrentEmployee/";
import Error from "./pages/Error/";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<CreateEmployee />} />
      <Route path="/current-employee" element={<CurrentEmployee />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
);
