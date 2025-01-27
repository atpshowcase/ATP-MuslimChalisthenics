import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Trainer from "../components/Trainer";
import Footer from "../components/Footer";
import Activity from "../components/Activity";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Events />
      <Activity />
      <Trainer />
      <About />
      <Footer />
    </div>
  );
}

export default App;