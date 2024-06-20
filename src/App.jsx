import { useState } from "react";

import "./App.css";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
