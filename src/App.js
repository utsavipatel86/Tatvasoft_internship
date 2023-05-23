import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import SearchBar from "./components/SearchBar";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import EditProduct from "./pages/EditProduct";
import AddBook from "./pages/AddBook";
import BookListing from "./pages/BookListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <BreadCrumb />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/edit" element={<EditProduct/>} />
          <Route path="/add" element={<AddBook/>} />
          <Route path="/books" element={<BookListing/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
