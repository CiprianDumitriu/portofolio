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
import {Routes, Route, Outlet, useLocation} from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => {
        window.scrollTo(0, 0)
      }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/portofolio" exact element={<AboutUs />}/>
          <Route path="/aboutus" exact element={<AboutUs />}/>
          <Route path="/ourwork" exact element={<OurWork />}/>
          <Route path="/ourwork/:id"  element={<MovieDetail />}/>
          <Route path="/contactus" exact element={<ContactUs />}/>
        </Routes>
      </AnimatePresence>
      <Outlet />
    </div>
  );
}

export default App;
