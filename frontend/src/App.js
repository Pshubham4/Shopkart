import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';


function App() {
  return (
    <BrowserRouter>
  <Header />

    <Routes>
    
    
    <Route path='/' element={<Home />}/>
    
  
    </Routes>

  <Footer />
  </BrowserRouter>
  );
}

export default App;
