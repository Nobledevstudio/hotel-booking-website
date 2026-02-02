import FeaturedDestinations from "./components/FeaturedDestinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HotelReg from "./components/HotelReg";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";



export default function Home() {
  return (
      <div className="min-h-[70vh]">
            {false && <HotelReg/>}
           <Hero/>   
           <WhyChooseUs/>
           <FeaturedDestinations/>
           <Services/>
           <Testimonial/>
           <NewsLetter/>
           <Footer/>
      </div>
      
  );
}
