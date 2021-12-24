import React from "react";
import ReactDOM from "react-dom";

import Container from "home/Container";
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.css";

function App() {
  return (
    <Container>
      <Header />
      <div>Carousel App</div>
      <Footer />
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
