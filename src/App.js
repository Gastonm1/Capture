import React from 'react'

//Global Style
import GlobalStyle from './components/GlobalStyles';
//Import Pages
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
