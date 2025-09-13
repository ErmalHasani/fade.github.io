import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-foreground">fade</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                A powerful Discord bot with advanced media, snipe, utility, and moderation commands.
              </p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Commands */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Commands</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#media" className="text-muted-foreground hover:text-foreground transition-colors">
                    Media Commands
                  </a>
                </li>
                <li>
                  <a href="#snipe" className="text-muted-foreground hover:text-foreground transition-colors">
                    Snipe Commands
                  </a>
                </li>
                <li>
                  <a href="#utility" className="text-muted-foreground hover:text-foreground transition-colors">
                    Utility Commands
                  </a>
                </li>
                <li>
                  <a href="#moderation" className="text-muted-foreground hover:text-foreground transition-colors">
                    Moderation
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#get-started" className="text-muted-foreground hover:text-foreground transition-colors">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support Server
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Status Page
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for the Discord community</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
            © 2024 fade. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;