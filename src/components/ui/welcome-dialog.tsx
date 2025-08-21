import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { X, FileText, Bell, Mail, CheckCircle } from "lucide-react";

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeDialog({ isOpen, onClose }: WelcomeDialogProps) {
  if (!isOpen) return null;

  const features = [
    {
      icon: FileText,
      title: "Parlamentssitzung Zusammenfassungen",
      description:
        "Erhalten Sie umfassende Zusammenfassungen von Parlamentssitzungen, einschließlich wichtiger Themen, Rednerdetails und Abstimmungsergebnisse.",
      color: "text-blue-600",
    },
    {
      icon: Bell,
      title: "Für spezifische Themen anmelden",
      description:
        "Wählen Sie die parlamentarischen Themen aus, die Sie am meisten interessieren, und werden Sie benachrichtigt, wenn sie diskutiert werden.",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "E-Mail-Updates",
      description: "Erhalten Sie regelmäßige E-Mail-Updates direkt in Ihren Posteingang mit den neuesten parlamentarischen Entwicklungen.",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">P</span>
                </span>
                Willkommen bei parlahh
              </CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p className="mb-4">
              parlahh hilft Ihnen dabei, den Überblick über die parlamentarischen Aktivitäten zu behalten. Hier sind die drei wichtigsten Funktionen:
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-muted/30">
                <div className={`p-2 rounded-lg bg-muted ${feature.color}`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">🚀 Bereit zu starten?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Sie können jetzt durch die aktuellen Sitzungen stöbern und sich für Themen interessieren, die Sie verfolgen möchten.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Alle Funktionen sind sofort verfügbar</span>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={onClose} className="px-6">
              Verstanden
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
