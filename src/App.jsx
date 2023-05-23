import {
  // BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Book from "./Book";
import Home from "./Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/Booklandia", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Booklandia" element={<Home />} />
        <Route path="/Booklandia/book/:bookName" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
