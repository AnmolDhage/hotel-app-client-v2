import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotel from "./pages/Hotel/Hotel";
import Search from "./pages/Search/Search";
import Single from "./pages/Single/Single";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Reservations from "./pages/Reservation/Reservation";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/search/all" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

