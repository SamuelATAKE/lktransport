// import logo from '../logo.spng';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/home";
import QrCode from "./pages/qrcode";
import Reservation from "./pages/reservation";
import "react-toastify/dist/ReactToastify.css";
import PayementConfirm from "./pages/payementConfirm";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/a-propos-de-nous" element={<About />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/paiement" element={<PayementConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;
