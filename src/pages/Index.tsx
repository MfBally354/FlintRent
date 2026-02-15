import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import PackagesSection from "@/components/PackagesSection";
import DeviceHighlight from "@/components/DeviceHighlight";
import HowToRent from "@/components/HowToRent";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhySection />
      <PackagesSection />
      <DeviceHighlight />
      <HowToRent />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
