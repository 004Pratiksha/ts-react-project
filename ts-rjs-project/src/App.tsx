import React from "react";
import Navbar from "./compoents/Navbar";
import Services from "./compoents/Services";
import Footer from "./compoents/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section id="home" style={{backgroundColor:"black" ,padding: "50px", textAlign: "center" }}>
        <h1>Welcome to Blemense Company</h1>
        <p>Your trusted partner in innovation.</p>
      </section>

      <div className="App">
      <Services />
      </div>

      <div className="Footer">
      <Footer />
      </div>
    </div>
    
  );
};

export default App;
