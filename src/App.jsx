import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./Book";
import Home from "./Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookName" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
