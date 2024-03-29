import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookOnline from './components/BookOnline';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/services',element:<Services/>},
      {path:'/contact',element:<Contact/>},
      {path:'/book-online',element:<BookOnline/>},
    ]
  )
  return routes;
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
