import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import EditNote from "./pages/EditNote";
import CategoriesPage from "./pages/CategoriesPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/n/:id" element={<EditNote />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
