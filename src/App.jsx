// src/App.jsx

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./assets/styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* More sections coming next... */}
      </main>
    </>
  );
}