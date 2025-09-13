import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: Plus,
    title: "Invite fade",
    description: "Click the invite button to add fade to your Discord server",
    badge: "Step 1"
  },
  {
    icon: Settings,
    title: "Setup Permissions", 
    description: "Grant necessary permissions for moderation and media commands",
    badge: "Step 2"
  },
  {
    icon: Zap,
    title: "Start Using",
    description: "Type -help to see all available commands and start managing your server",
    badge: "Step 3"
  }
];

const GetStarted = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-fade-primary bg-clip-text text-transparent">
            Get Started
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get fade up and running in your server in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className="gradient-card border-fade-primary/20 text-center hover:shadow-glow transition-smooth hover:scale-105"
            >
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mx-auto mb-4 bg-fade-primary/20 text-fade-primary">
                  {step.badge}
                </Badge>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-fade-primary to-fade-secondary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="gradient-card border-fade-primary/30 max-w-md mx-auto shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                Ready to enhance your server?
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-6">
                Join thousands of servers already using fade for better Discord management
              </CardDescription>
              <Button 
                size="lg"
                className="gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow w-full font-semibold"
              >
                Invite fade to Your Server
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;