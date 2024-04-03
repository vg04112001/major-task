import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BookOnline from "./components/BookOnline";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import OurWork from "./components/OurWork";
import WishList from "./components/WishList";
import GoToTop from "./components/GoToTop";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/our-work", element: <OurWork /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/wishlist", element: <WishList /> },
    { path: "/book-online", element: <BookOnline /> },
  ]);
  return routes;
}

function App() {
  return (
    <>
      <Router>
        <GoToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;