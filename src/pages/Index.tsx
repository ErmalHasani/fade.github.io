import Hero from "@/components/Hero";
import CommandCategories from "@/components/CommandCategories";
import CommandList from "@/components/CommandList";
import GetStarted from "@/components/GetStarted";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CommandCategories />
      <CommandList />
      <GetStarted />
    </div>
  );
};

export default Index;
