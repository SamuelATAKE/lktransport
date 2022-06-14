// import logo from '../logo.spng';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/home";
import QrCode from "./pages/qrcode";
import Reservation from "./pages/reservation";
import "react-toastify/dist/ReactToastify.css";
import ExternalNavigation from "./components/ExternalNavigation";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/paygate" element={<ExternalNavigation />} />
      </Routes>
    </Router>
  );
}

export default App;
