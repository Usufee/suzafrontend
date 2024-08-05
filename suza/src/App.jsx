import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componentes/Home";
import AboutUs from "./componentes/AboutUs";
import Varieties from "./componentes/Varieties";
import Gallery from "./componentes/Gallery";
import Reviews from "./componentes/Reviews";
import Contact from "./componentes/Contact";
import Story from "./componentes/Story";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Varieties" element={<Varieties />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Story" element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
