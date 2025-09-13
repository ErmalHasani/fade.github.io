import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Zap, Settings, Shield } from "lucide-react";

const categories = [
  {
    title: "Media Commands",
    description: "Create and edit images, banners, and avatars for your server",
    icon: Image,
    color: "from-fade-primary to-fade-secondary",
    commands: ["avatar", "banner", "serverbanner"],
    badge: "3 commands"
  },
  {
    title: "Snipe Commands", 
    description: "Track deleted and edited messages with advanced snipe functionality",
    icon: Zap,
    color: "from-fade-secondary to-fade-accent",
    commands: ["snipe", "editsnipe", "reactionsnipe", "clearsnipes"],
    badge: "4 commands"
  },
  {
    title: "Utility Commands",
    description: "Essential tools for server information and user management",
    icon: Settings,
    color: "from-fade-accent to-fade-primary",
    commands: ["userinfo", "serverinfo", "ping"],
    badge: "3 commands"
  },
  {
    title: "Moderation Commands",
    description: "Powerful moderation tools to keep your server safe and organized",
    icon: Shield,
    color: "from-fade-primary/80 to-fade-accent",
    commands: ["ban", "kick", "mute", "unmute"],
    badge: "4 commands"
  }
];

const CommandCategories = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-fade-primary bg-clip-text text-transparent">
            Command Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all the powerful features fade has to offer, organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="gradient-card border-fade-primary/20 shadow-card hover:shadow-glow transition-smooth hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-fade-muted/50 text-muted-foreground">
                    {category.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-fade-primary transition-smooth">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.commands.map((command) => (
                    <Badge 
                      key={command}
                      variant="outline" 
                      className="border-fade-primary/30 text-foreground hover:bg-fade-primary/10 transition-smooth font-mono"
                    >
                      {command}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandCategories;