import { useState } from "react";
import Review from "./components/Review";
import "./App.css";

function App() {
  return (
    <main>
      <section className="container">
        <div className="header">
          <h1 className="title">Our Reviews</h1>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
