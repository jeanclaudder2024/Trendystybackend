import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import TermsOfServices from './pages/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import CopyrightPolicy from './pages/CopyrightPolicy';
import ProductsPage from './pages/ProductsPage'; // Import the ProductsPage component
import './App.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />
        <Route path="/productspage" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;