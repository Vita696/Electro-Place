import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/footer.jsx";
import Modal from "./components/modalWindow/modal";
import Phones from "./components/catalog/phones/phones.jsx";

function App(props) {
  return (
    <>
      <Modal />
      <Headers {...props} />
      <Routes>
        <Route path="/" element={<Main {...props} />} />

        <Route path="/about" element={<Phones />} />
        <Route path="*" element={<Main {...props} />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
