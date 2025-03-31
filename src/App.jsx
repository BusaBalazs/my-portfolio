import { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { Contact, Footer, Header, Hero, Services } from "./components";

//------------------------------------------------------
//------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

//------------------------------------------------------
export default App;
