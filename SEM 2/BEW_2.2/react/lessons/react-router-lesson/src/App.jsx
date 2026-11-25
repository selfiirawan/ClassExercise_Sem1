import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";

/*
  1. BrowserRouter = uses the HTML5 history API to keep your UI 
  in sync with the URL
  2. Routes = a component that allows us to define multiple routes
  3. Route = a component used to define a single route
*/

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Blog() {
  return <h1>Blog Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
