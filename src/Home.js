import React from 'react'
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Reason from "./Components/Reason/Reason";
import Plans from "./Components/Plans/Plans";
import Testimonials from "./Components/Testimonials/Testimonials";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";
// import About from "./About/About";

function Home() {
  return (
    <div>
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
      {/* <About /> */}
    </div>
  )
}

export default Home
