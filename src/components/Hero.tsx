import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fade-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fade-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 bg-fade-muted/50 text-foreground border-fade-primary/30">
          Discord Bot Documentation
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-fade-primary to-fade-secondary bg-clip-text text-transparent leading-tight">
          fade
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A powerful Discord bot with advanced moderation, media tools, and utility commands. 
          Everything you need to manage your server effectively.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow px-8 py-6 text-lg font-semibold"
          >
            Invite to Server
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-fade-primary/30 text-foreground hover:bg-fade-primary/10 px-8 py-6 text-lg"
          >
            View Commands
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-8 text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">25+</div>
            <div className="text-sm">Commands</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">99.9%</div>
            <div className="text-sm">Uptime</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;