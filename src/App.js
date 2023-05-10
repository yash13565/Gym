import { RecoilRoot } from "recoil";
import "./App.css";
import Footer from "./Components/Footer/Footer";
// import { Route, Routes } from "react-router";
// import Home from "./Home";
// import Register from "./register/Register";
// import LogIn from "./login/LogIn";
// import About from "./About/About";
// import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Program from "./Components/Program/Program";
import Reasons from "./Components/Reason/Reason";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <RecoilRoot>
        <Hero />
        <Program />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </RecoilRoot>

      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register/Register" element={<Register />}/>
        <Route path="/login/LogIn" element={<LogIn />}/>
        <Route path="/About/About" element={<About />}/>
        <Route path="/Home" element={<Home />}/>
      </Routes> */}
    </div>
  );
}

export default App;
