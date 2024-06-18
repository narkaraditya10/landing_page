import { useState } from "react";

import "./App.css";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          somthe
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
