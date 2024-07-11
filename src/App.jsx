import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
