import { Clock, FileText, Settings } from "lucide-react";
import { Button } from "./button";

interface SessionHeaderProps {
  date: string;
  duration: string;
  topicCount: number;
}

export function SessionHeader({ date, duration, topicCount }: SessionHeaderProps) {
  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Hamburgische Bürgerschaft</h1>
            <h2 className="text-lg md:text-xl font-semibold text-foreground mt-1">Sitzungsübersicht</h2>
            <p className="text-muted-foreground mt-1">Datum: {date}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>{topicCount} Themen</span>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Einstellungen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
