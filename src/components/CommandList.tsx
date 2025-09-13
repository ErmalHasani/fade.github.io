import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Terminal } from "lucide-react";

const commands = [
  {
    category: "Media Commands",
    items: [
      {
        name: "avatar",
        description: "Get user's avatar with various size options",
        usage: "-avatar [user] [size]",
        example: "-avatar @user 1024"
      },
      {
        name: "banner",
        aliases: ["b"],
        description: "Display user's banner image",
        usage: "-banner [user]",
        example: "-banner @user"
      },
      {
        name: "serverbanner",
        aliases: ["sb"],
        description: "Show the server's banner image",
        usage: "-serverbanner",
        example: "-serverbanner"
      }
    ]
  },
  {
    category: "Snipe Commands", 
    items: [
      {
        name: "snipe",
        aliases: ["s"],
        description: "Show the most recently deleted message",
        usage: "-snipe [channel]",
        example: "-snipe #general"
      },
      {
        name: "editsnipe",
        aliases: ["es"],
        description: "Show the most recently edited message",
        usage: "-editsnipe [channel]",
        example: "-editsnipe #general"
      },
      {
        name: "reactionsnipe",
        aliases: ["rs"],
        description: "Show recently removed reactions",
        usage: "-reactionsnipe [channel]",
        example: "-reactionsnipe #general"
      },
      {
        name: "clearsnipes",
        aliases: ["cs"],
        description: "Clear all sniped messages from a channel",
        usage: "-clearsnipes [channel]",
        example: "-clearsnipes #general"
      }
    ]
  },
  {
    category: "Utility Commands",
    items: [
      {
        name: "userinfo",
        aliases: ["ui"],
        description: "Get detailed information about a user",
        usage: "-userinfo [user]",
        example: "-userinfo @user"
      },
      {
        name: "serverinfo",
        aliases: ["si"],
        description: "Get detailed information about the server",
        usage: "-serverinfo",
        example: "-serverinfo"
      },
      {
        name: "ping",
        description: "Check bot's latency and response time",
        usage: "-ping",
        example: "-ping"
      }
    ]
  },
  {
    category: "Moderation Commands",
    items: [
      {
        name: "ban",
        description: "Ban a user from the server",
        usage: "-ban <user> [reason]",
        example: "-ban @user spamming"
      },
      {
        name: "kick",
        description: "Kick a user from the server",
        usage: "-kick <user> [reason]",
        example: "-kick @user inappropriate behavior"
      },
      {
        name: "mute",
        description: "Mute a user for a specified duration",
        usage: "-mute <user> [duration] [reason]",
        example: "-mute @user 10m spamming"
      },
      {
        name: "unmute",
        description: "Remove mute from a user",
        usage: "-unmute <user>",
        example: "-unmute @user"
      }
    ]
  }
];

const CommandList = () => {
  return (
    <section className="py-20 px-4 bg-fade-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-fade-primary bg-clip-text text-transparent">
            Command Reference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete list of all available commands with usage examples
          </p>
        </div>
        
        <div className="space-y-12">
          {commands.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Terminal className="w-6 h-6 text-fade-primary" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((command) => (
                  <Card 
                    key={command.name}
                    className="gradient-card border-fade-primary/20 hover:shadow-glow transition-smooth hover:scale-105"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Code2 className="w-5 h-5 text-fade-primary" />
                        <CardTitle className="text-xl font-bold text-card-foreground">
                          {command.name}
                        </CardTitle>
                        {command.aliases && (
                          <div className="flex gap-1">
                            {command.aliases.map((alias) => (
                              <Badge 
                                key={alias} 
                                variant="outline"
                                className="text-xs border-fade-primary/30 text-muted-foreground"
                              >
                                {alias}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {command.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Usage:</p>
                        <code className="bg-fade-muted/50 text-fade-primary px-3 py-1 rounded-md text-sm font-mono">
                          {command.usage}
                        </code>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Example:</p>
                        <code className="bg-fade-muted/30 text-foreground px-3 py-1 rounded-md text-sm font-mono">
                          {command.example}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandList;