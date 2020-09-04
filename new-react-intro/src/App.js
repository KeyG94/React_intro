import React from 'react';
import './sass/style.scss';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="wrapper">
    <div className="container">
      <Heading/>
      <Paragraph/>
      <Card/>
    </div>
    </div>
      <Footer />
    </>
  );
}

export default App;
