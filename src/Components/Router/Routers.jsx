import React from "react";
import { Route, Routes } from "react-router";
// import { RecoilRoot, useRecoilValue } from "recoil";
import About from "../../About/About";
import App from "../../App";
// import Home from "../../Home";
import LogIn from "../../login/LogIn";
import Register from "../../register/Register";
import { selectorValue } from "../../selector/selector";
import Activities from "../Activities/Activities";
import Header from "../Header/Header";

function Routers() {
  // const [selectorData]=useRecoilValue(selectorValue)

  return (
    <div className="header-b">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register/Register" element={<Register />} />
        <Route path="/login/LogIn" element={<LogIn />} />
        <Route path="/About/About" element={<About />} />
        <Route path="/App" element={<App />} />
        <Route path="/Activities/Activities" element={<Activities atomData={selectorValue} />} />
        {/* <RecoilRoot><Route path="/Activities/Activities" element={<Activities atomData={selectorValue} />} /></RecoilRoot> */}
      </Routes>
    </div>
  );
}

export default Routers;
