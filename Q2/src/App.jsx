import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LibraryProvider } from "./context/LibraryContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import UserPage from "./pages/UserPage";
import BookDetailPage from "./pages/BookDetailPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <LibraryProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
}

export default App;
