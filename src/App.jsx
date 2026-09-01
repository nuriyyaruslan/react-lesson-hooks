import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// vite, react-router-dom, mui or react-bootstrap

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/posts' element={<Posts/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
