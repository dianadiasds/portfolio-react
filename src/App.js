import React from 'react';
import './style/index.scss';
import Header from "./components/Header";
import Stack from "./components/Stack";
import About from "./components/About";
import Companies from "./components/Companies";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Stack/>
      <Companies/>
     <Jobs/>
     <Footer/>
    </div>
  );
}

export default App;
