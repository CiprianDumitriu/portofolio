import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetails";
// Router
import {Routes, Route, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}/>
        <Route path="/aboutus" exact element={<AboutUs />}/>
        <Route path="/ourwork" exact element={<OurWork />}/>
        <Route path="/ourwork/:id"  element={<MovieDetail />}/>
        <Route path="/contactus" exact element={<ContactUs />}/>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
