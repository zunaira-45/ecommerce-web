import Image from "next/image";
import Topbar from "./Components/Topbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
    <div>
      <Topbar/>
      <Navbar />
      <Hero />
      <Footer />
      
    </div>
  );
}
