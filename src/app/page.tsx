import Topbar from "./Components/Topbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductCards from "./Product/page";
import Testimonial from "./Components/testimonials";






export default function Home() {
  return (
    <div>
      
      <Topbar/>
      <Navbar />
      <Hero/>
      <ProductCards/>
      <Testimonial/>
      <Footer />
      
    </div>
  );
}
