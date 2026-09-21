import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import BloodAvailability from "./components/BloodAvailability";
import EmergencyRequest from "./components/EmergencyRequest";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function Landing() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <BloodAvailability />
      <EmergencyRequest />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;