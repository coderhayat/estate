
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './cmp/Navbar/Header';
import Homepage from "./cmp/Homepage/Homepage";
import Footer from "./cmp/Footer/Footer";
import About from "./cmp/About/About";
import Property from "./cmp/Property/Property";
import Blog from "./cmp/Blog/Blog";
import Contact from "./cmp/Contact/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />}/>
      <Route path="/property" element={<Property />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
