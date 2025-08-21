"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TopBar } from "@/components/ui/top-bar";
import { SessionHeader } from "@/components/ui/session-header";
import { WelcomeDialog } from "@/components/ui/welcome-dialog";
import { ChevronDown, ChevronUp, Users, HelpCircle } from "lucide-react";

// Sample data for Hamburg parliamentary session
const sessionData = {
  date: "15. Januar 2025",
  duration: "4h 30min",
  topicCount: 12,
  priorityTopics: [
    {
      id: 1,
      title: "Startup-Förderung und Digitalisierung",
      submittingParty: "SPD",
      duration: "45min",
      summary: "Diskussion über neue Förderprogramme für Hamburger Startups und die Digitalisierung der Verwaltung",
      speakers: [
        { party: "SPD", name: "Dr. Sarah Müller", duration: "12min", summary: "Vorstellung des neuen Startup-Fonds" },
        { party: "CDU", name: "Thomas Weber", duration: "8min", summary: "Kritik an der Finanzierung" },
        { party: "GRÜNE", name: "Lisa Schmidt", duration: "10min", summary: "Nachhaltigkeit in der Startup-Förderung" },
        { party: "AfD", name: "Michael Klein", duration: "7min", summary: "Bedenken zur Bürokratie" },
        { party: "Die Linke", name: "Anna Richter", duration: "8min", summary: "Soziale Aspekte der Digitalisierung" },
      ],
    },
    {
      id: 2,
      title: "Bildungsreform und Schuldigitalisierung",
      submittingParty: "GRÜNE",
      duration: "38min",
      summary: "Neue Konzepte für digitale Bildung und Modernisierung der Hamburger Schulen",
      speakers: [
        { party: "GRÜNE", name: "Prof. Maria Hoffmann", duration: "15min", summary: "Digitale Lernplattformen" },
        { party: "SPD", name: "Klaus Bauer", duration: "12min", summary: "Finanzierung der Reformen" },
        { party: "CDU", name: "Petra Lange", duration: "11min", summary: "Qualitätssicherung" },
      ],
    },
    {
      id: 3,
      title: "Umweltschutz und Klimaneutralität 2030",
      submittingParty: "GRÜNE",
      duration: "52min",
      summary: "Maßnahmen zur Erreichung der Klimaneutralität Hamburgs bis 2030",
      speakers: [
        { party: "GRÜNE", name: "Dr. Felix Green", duration: "18min", summary: "Klimaschutzplan 2030" },
        { party: "SPD", name: "Sabine Wolf", duration: "14min", summary: "Wirtschaftliche Auswirkungen" },
        { party: "CDU", name: "Robert Fischer", duration: "12min", summary: "Realistische Zielsetzung" },
        { party: "Die Linke", name: "Julia Braun", duration: "8min", summary: "Soziale Gerechtigkeit" },
      ],
    },
  ],
  allTopics: [
    { id: 4, title: "Hafenentwicklung", party: "SPD", duration: "25min" },
    { id: 5, title: "Wohnungsbau", party: "CDU", duration: "30min" },
    { id: 6, title: "Verkehrswende", party: "GRÜNE", duration: "35min" },
    { id: 7, title: "Sicherheit", party: "AfD", duration: "20min" },
    { id: 8, title: "Soziale Gerechtigkeit", party: "Die Linke", duration: "28min" },
    { id: 9, title: "Wirtschaftsförderung", party: "CDU", duration: "22min" },
    { id: 10, title: "Kulturförderung", party: "SPD", duration: "18min" },
    { id: 11, title: "Gesundheitswesen", party: "GRÜNE", duration: "33min" },
    { id: 12, title: "Integration", party: "Die Linke", duration: "26min" },
  ],
};

const partyColors = {
  SPD: "bg-[color:var(--color-party-spd)] text-white",
  CDU: "bg-[color:var(--color-party-cdu)] text-white border border-border",
  GRÜNE: "bg-[color:var(--color-party-grune)] text-white",
  AfD: "bg-[color:var(--color-party-afd)] text-foreground",
  "Die Linke": "bg-[color:var(--color-party-linke)] text-white",
};

export default function HamburgParliamentDashboard() {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  const toggleTopicExpansion = (topicId: number) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar onHelpClick={() => setShowWelcomeDialog(true)} />

      <WelcomeDialog isOpen={showWelcomeDialog} onClose={() => setShowWelcomeDialog(false)} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 space-y-8 py-8">
        {/* Session Header */}
        <SessionHeader date={sessionData.date} duration={sessionData.duration} topicCount={sessionData.topicCount} />

        {/* Priority Topics Section */}
        <section className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <Users className="h-5 w-5 text-black" />
            <h2 className="text-xl font-semibold text-foreground">Ihre abonnierten Themen</h2>
            <Badge variant="secondary" className="ml-2">
              {sessionData.priorityTopics.length}
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sessionData.priorityTopics.map((topic) => (
              <Card key={topic.id} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
                    <Badge className={partyColors[topic.submittingParty as keyof typeof partyColors]}>{topic.submittingParty}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="text-xs bg-muted px-2 py-1 rounded">{topic.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {topic.speakers.length} Redner
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{topic.summary}</CardDescription>

                  <div>
                    <Button variant="ghost" size="sm" onClick={() => toggleTopicExpansion(topic.id)} className="w-full justify-between p-2 h-auto">
                      <span className="text-sm font-medium">Redner anzeigen</span>
                      {expandedTopic === topic.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>

                    {expandedTopic === topic.id && (
                      <div className="mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
                        {topic.speakers.map((speaker, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 rounded-md bg-muted/30">
                            <Badge className={`${partyColors[speaker.party as keyof typeof partyColors]} shrink-0`}>{speaker.party}</Badge>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 text-sm">
                                <span className="font-medium">{speaker.name}</span>
                                <span className="text-muted-foreground">({speaker.duration})</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{speaker.summary}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Complete Session Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Vollständige Sitzung</h2>
            <Button variant="outline" onClick={() => setShowAllTopics(!showAllTopics)} className="flex items-center gap-2">
              {showAllTopics ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Einklappen
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Alle Themen anzeigen
                </>
              )}
            </Button>
          </div>

          {showAllTopics && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 animate-in slide-in-from-top-4 duration-300">
              {sessionData.allTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-sm leading-tight">{topic.title}</h3>
                      <Badge className={partyColors[topic.party as keyof typeof partyColors]}>{topic.party}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="text-xs bg-muted px-2 py-1 rounded">{topic.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Other Sessions Section */}
        <section className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-foreground">Weitere Sitzungen</h2>
            <Badge variant="outline" className="ml-2">
              Alle anzeigen
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Upcoming Sessions */}
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Nächste Sitzung</h3>
                  <Badge variant="secondary" className="text-xs">
                    29. Januar 2025
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Geplante Themen: 8</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Geplant</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Übernächste Sitzung</h3>
                  <Badge variant="secondary" className="text-xs">
                    12. Februar 2025
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Geplante Themen: 6</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>In Planung</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Letzte Sitzung</h3>
                  <Badge variant="secondary" className="text-xs">
                    1. Januar 2025
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Behandelte Themen: 10</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  <span>Abgeschlossen</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Sitzung vom 18. Dezember</h3>
                  <Badge variant="secondary" className="text-xs">
                    18. Dezember 2024
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Behandelte Themen: 12</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  <span>Abgeschlossen</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Sitzung vom 4. Dezember</h3>
                  <Badge variant="secondary" className="text-xs">
                    4. Dezember 2024
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Behandelte Themen: 9</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  <span>Abgeschlossen</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm">Sitzung vom 20. November</h3>
                  <Badge variant="secondary" className="text-xs">
                    20. November 2024
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Behandelte Themen: 11</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  <span>Abgeschlossen</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" className="px-8">
              Alle Sitzungen anzeigen
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
