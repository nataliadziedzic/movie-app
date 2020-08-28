import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    window.addEventListener("orientationchange", function () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  })
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;