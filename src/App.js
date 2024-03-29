import React from "react";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Global Style
import GlobalStyle from "./components/GlobalStyles";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Import Components
import Nav from "./components/Nav";
//Framer Motion
import { AnimatePresence } from "framer-motion";
//Custom Hooks
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <ScrollTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="work" exact element={<OurWork />} />
          <Route path="work/:id" exact element={<MovieDetail />} />
          <Route path="contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
