import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
import Navigation from "./components/Navigation";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

/*
  1. BrowserRouter = uses the HTML5 history API to keep your UI 
                    in sync with the URL
  2. Routes = a component that allows us to define multiple routes
  3. Route = a component used to define a single route
*/

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
