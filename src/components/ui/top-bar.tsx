import { Settings, Bell, User, HelpCircle } from "lucide-react";
import { Button } from "./button";

interface TopBarProps {
  onHelpClick?: () => void;
}

export function TopBar({ onHelpClick }: TopBarProps) {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">parlahh</h1>
              <p className="text-xs text-muted-foreground">Hamburg Parlament Summaries</p>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Einstellungen
            </Button>
            {onHelpClick && (
              <Button variant="ghost" size="sm" onClick={onHelpClick} className="text-muted-foreground hover:text-foreground">
                <HelpCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
