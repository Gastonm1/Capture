import React from "react";
//Router
import { Routes, Route } from "react-router-dom";
//Global Style
import GlobalStyle from "./components/GlobalStyles";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Import Components
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="work" exact element={<OurWork />} />
        <Route path="contact" exact element={<ContactUs />} />
        <Route path="/" exact element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
