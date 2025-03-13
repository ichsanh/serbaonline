import React from "react";
import Navbar from "./component/nav";
import Footer from "./component/footr";
import LandingPage1 from "./page/landing";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage1 />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
