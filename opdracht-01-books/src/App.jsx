import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Navigation from './pages/Navigation';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
    <Route path='/' element={<Navigation/>}>

    <Route index element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="*" element={<NoPage/>}/>



    </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
