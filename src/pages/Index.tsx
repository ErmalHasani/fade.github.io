import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommandCategories from "@/components/CommandCategories";
import CommandList from "@/components/CommandList";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <CommandCategories />
        <CommandList />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
